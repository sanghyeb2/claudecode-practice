import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
