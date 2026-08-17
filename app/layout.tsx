import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "./fonts/JetBrainsMono[wght].ttf",
  variable: "--font-jetbrains-mono",
  weight: "100 800",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CLAUDECODE-PRACTICE — 풀스택 컴포넌트 레지스트리",
  description:
    "shadcn/ui의 철학을 서버까지 확장한 오픈소스 풀스택 레지스트리. UI, API 라우트, DB 스키마가 함께 묶인 블록을 CLI 한 줄로 설치하세요.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${pretendard.variable} ${jetbrainsMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
