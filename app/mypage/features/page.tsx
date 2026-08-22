import type { Metadata } from "next";
import { FeatureForm } from "@/app/components/features/feature-form";
import featuresData from "@/data/features.json";

const CATEGORIES = [...new Set(featuresData.map((feature) => feature.category))];

export const metadata: Metadata = {
  title: "기능 관리 — CLAUDECODE-PRACTICE",
  description: "등록한 기능을 확인하고 관리하는 페이지입니다.",
};

export default function FeaturesPage() {
  return (
    <>
      <header>
        <h1 className="text-title-1 tracking-tight text-foreground">
          기능 관리
        </h1>
        <p className="mt-text-sm text-body-lg text-muted-foreground">
          등록한 기능의 상태를 확인하고 내용을 수정할 수 있습니다.
        </p>
      </header>

      <section aria-labelledby="new-feature" className="mt-section-md">
        <h2 id="new-feature" className="text-title-3 text-foreground">
          새 기능 등록
        </h2>

        <FeatureForm categories={CATEGORIES} />
      </section>
    </>
  );
}
