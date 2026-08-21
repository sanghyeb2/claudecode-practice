import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "기능 관리 — CLAUDECODE-PRACTICE",
  description: "등록한 기능을 확인하고 관리하는 페이지입니다.",
};

export default function FeaturesPage() {
  return (
    <header>
      <h1 className="text-title-1 tracking-tight text-foreground">기능 관리</h1>
      <p className="mt-text-sm text-body-lg text-muted-foreground">
        등록한 기능의 상태를 확인하고 내용을 수정할 수 있습니다.
      </p>
    </header>
  );
}
