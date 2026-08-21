import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "마이페이지 — CLAUDECODE-PRACTICE",
  description: "내가 등록한 기능을 확인하고 관리하는 판매자 전용 페이지입니다.",
};

export default function MyPage() {
  return (
    <>
      <header>
        <h1 className="text-title-1 tracking-tight text-foreground">
          마이페이지
        </h1>
        <p className="mt-text-sm text-body-lg text-muted-foreground">
          내가 등록한 기능을 한곳에서 확인하고 관리하세요.
        </p>
      </header>

      <section
        aria-labelledby="my-registrations"
        className="mt-section-md rounded-xl border border-dashed border-border bg-card/40"
      >
        <h2 id="my-registrations" className="sr-only">
          등록한 기능 목록
        </h2>
        <p className="px-inline-md py-section-lg text-center text-body-md text-tertiary">
          등록한 기능이 여기에 표시됩니다
        </p>
      </section>
    </>
  );
}
