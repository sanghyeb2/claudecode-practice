import type { Metadata } from "next";
import { headers } from "next/headers";
import { FeatureCard } from "@/app/components/features/feature-card";
import type { FeatureResponse } from "@/app/api/features/route";

export const metadata: Metadata = {
  title: "기능 목록 — CLAUDECODE-PRACTICE",
  description: "판매 중인 기능을 한눈에 둘러보세요.",
};

async function getFeatures(): Promise<FeatureResponse[]> {
  const headerList = await headers();
  const host = headerList.get("host");
  const protocol = headerList.get("x-forwarded-proto") ?? "http";

  const response = await fetch(`${protocol}://${host}/api/features`);

  if (!response.ok) {
    throw new Error(`기능 목록을 불러오지 못했습니다. (${response.status})`);
  }

  return response.json();
}

export default async function FeaturesPage() {
  const features = await getFeatures();

  return (
    <main className="flex-1 bg-background text-foreground">
      <div className="mx-auto max-w-layout-lg px-(--safe-padding-x) py-section-md">
        <header>
          <h1 className="text-title-1 tracking-tight text-foreground">
            기능 목록
          </h1>
          <p className="mt-text-sm text-body-lg text-muted-foreground">
            판매 중인 기능을 둘러보고 필요한 기능을 찾아보세요.
          </p>
        </header>

        {features.length === 0 ? (
          <p className="mt-section-md text-body-lg text-muted-foreground">
            아직 등록된 기능이 없습니다.
          </p>
        ) : (
          <div className="mt-section-md grid grid-cols-1 gap-grid-gutter-x sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.id} {...feature} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
