import { IconArrowRight } from "./icons";

export function Cta() {
  return (
    <section className="border-t border-border py-section-lg">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-title-2 tracking-tight text-foreground">
          지금 바로 첫 번째 블록을 설치해보세요
        </h2>
        <p className="mx-auto mt-text-sm max-w-xl text-muted-foreground">
          npx 명령어 한 줄이면 충분합니다. 설정 파일도, 계정 가입도
          필요하지 않아요.
        </p>

        <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-inline-sm rounded-md border border-border bg-background px-4 py-3 font-mono text-sm text-foreground">
          <span className="text-secondary-400">$</span>
          npx claudecode-practice init
        </div>

        <a
          href="#registry"
          className="mt-8 inline-flex items-center justify-center gap-inline-sm rounded-md bg-primary px-5 py-2.5 text-label-lg text-primary-foreground transition-colors hover:bg-primary/90"
        >
          레지스트리 둘러보기
          <IconArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
