import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import type { Feature } from "@/app/components/features/feature-card";

export type FeatureResponse = Feature & { id: number };

export async function GET() {
  const supabase = createClient(await cookies());

  const { data, error } = await supabase
    .from("features")
    .select("id, name, description, category, price")
    .order("created_at", { ascending: false })
    .order("id", { ascending: false })
    .returns<FeatureResponse[]>();

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(data);
}

function parseFeature(body: unknown): Feature | string {
  if (typeof body !== "object" || body === null) {
    return "요청 형식이 올바르지 않습니다.";
  }

  const { name, description, category, price } = body as Record<
    string,
    unknown
  >;

  const text = (value: unknown) =>
    typeof value === "string" ? value.trim() : "";

  const parsed = {
    name: text(name),
    description: text(description),
    category: text(category),
  };

  const emptyLabel = (
    [
      ["name", "기능 이름을"],
      ["description", "한 줄 설명을"],
      ["category", "카테고리를"],
    ] as const
  ).find(([key]) => parsed[key] === "")?.[1];

  if (emptyLabel) {
    return `${emptyLabel} 입력해 주세요.`;
  }

  const parsedPrice = typeof price === "number" ? price : Number(price);

  if (!Number.isInteger(parsedPrice) || parsedPrice < 0) {
    return "가격은 0 이상의 정수여야 합니다.";
  }

  return { ...parsed, price: parsedPrice };
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "요청 형식이 올바르지 않습니다." },
      { status: 400 },
    );
  }

  const feature = parseFeature(body);

  if (typeof feature === "string") {
    return Response.json({ error: feature }, { status: 400 });
  }

  const supabase = createClient(await cookies());

  const { data, error } = await supabase
    .from("features")
    .insert(feature)
    .select("id, name, description, category, price")
    .single<FeatureResponse>();

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(data, { status: 201 });
}
