import { IconArrowRight } from "./icons";

export function Cta() {
  return (
    <section className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          지금 바로 첫 번째 블록을 설치해보세요
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-400">
          npx 명령어 한 줄이면 충분합니다. 설정 파일도, 계정 가입도
          필요하지 않아요.
        </p>

        <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 rounded-md border border-white/10 bg-zinc-900/60 px-4 py-3 font-mono text-sm text-zinc-300">
          <span className="text-emerald-400">$</span>
          npx claudecode-practice init
        </div>

        <a
          href="#registry"
          className="mt-8 inline-flex items-center justify-center gap-1.5 rounded-md bg-white px-5 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
        >
          레지스트리 둘러보기
          <IconArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
