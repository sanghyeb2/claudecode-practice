import { IconArrowRight, IconCopy, IconGithub } from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(255,255,255,0.12),rgba(0,0,0,0))]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
      />

      <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 text-center sm:pt-32">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
          <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          v1.0 출시 · 오픈소스 풀스택 레지스트리
        </div>

        <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          UI가 아니라,
          <br />
          <span className="text-zinc-500">완성된 기능</span>을 설치하세요.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-zinc-400 sm:text-lg">
          CLAUDECODE-PRACTICE는 shadcn/ui의 철학을 서버까지 확장한 풀스택
          컴포넌트 레지스트리입니다. UI, API 라우트, DB 스키마가 하나로 묶인
          블록을 CLI 한 줄로 내 코드베이스에 그대로 가져오세요.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#registry"
            className="flex w-full items-center justify-center gap-1.5 rounded-md bg-white px-5 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200 sm:w-auto"
          >
            컴포넌트 둘러보기
            <IconArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="flex w-full items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-white/30 hover:bg-white/5 sm:w-auto"
          >
            <IconGithub className="h-4 w-4" />
            GitHub에서 보기
          </a>
        </div>

        <div className="mx-auto mt-14 max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-zinc-900/60 text-left shadow-2xl shadow-black/40">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            </div>
            <span className="text-xs text-zinc-500">terminal</span>
            <IconCopy className="h-3.5 w-3.5 text-zinc-600" />
          </div>
          <div className="space-y-1.5 px-5 py-5 font-mono text-[13px] leading-relaxed sm:text-sm">
            <p className="text-zinc-500">
              <span className="text-emerald-400">➜</span> npx claudecode-practice add auth payments admin-dashboard
            </p>
            <p className="text-zinc-500">✔ 레지스트리에서 3개 블록을 확인했어요</p>
            <p className="text-zinc-500">✔ UI 컴포넌트 설치 중… components/</p>
            <p className="text-zinc-500">✔ API 라우트 생성 중… app/api/</p>
            <p className="text-zinc-500">✔ DB 스키마 병합 중… db/schema.ts</p>
            <p className="text-white">✔ 완료! 3개 블록, 27개 파일이 추가되었습니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
