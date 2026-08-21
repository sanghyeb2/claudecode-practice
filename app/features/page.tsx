import type { Metadata } from "next";
import {
  FeatureCard,
  type Feature,
} from "@/app/components/features/feature-card";
import featuresData from "@/data/features.json";

const features: Feature[] = featuresData;

export const metadata: Metadata = {
  title: "기능 목록 — CLAUDECODE-PRACTICE",
  description: "판매 중인 기능을 한눈에 둘러보세요.",
};

export default function FeaturesPage() {
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

        <div className="mt-section-md grid grid-cols-1 gap-grid-gutter-x sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.name} {...feature} />
          ))}
        </div>
      </div>
    </main>
  );
}
