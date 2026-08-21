import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "내 정보 — CLAUDECODE-PRACTICE",
  description: "판매자 계정의 기본 정보를 확인하고 관리하는 페이지입니다.",
};

export default function ProfilePage() {
  return (
    <header>
      <h1 className="text-title-1 tracking-tight text-foreground">내 정보</h1>
      <p className="mt-text-sm text-body-lg text-muted-foreground">
        판매자 계정의 기본 정보를 확인하고 수정할 수 있습니다.
      </p>
    </header>
  );
}
