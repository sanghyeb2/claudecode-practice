const STEPS = [
  {
    number: "01",
    title: "탐색",
    description:
      "레지스트리에서 필요한 기능을 찾으세요. 각 블록은 데모와 필요한 스택이 함께 안내됩니다.",
  },
  {
    number: "02",
    title: "설치",
    description:
      "CLI 명령 한 줄로 UI, API 라우트, DB 스키마를 프로젝트에 한 번에 가져옵니다.",
  },
  {
    number: "03",
    title: "커스터마이징",
    description:
      "설치된 코드는 내 코드베이스에 있는 일반 파일입니다. 자유롭게 열어 수정하세요.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-title-2 tracking-tight text-foreground">
            사용 방법은 간단합니다
          </h2>
          <p className="mt-text-sm text-muted-foreground">
            설정 파일도, 복잡한 온보딩도 없습니다. 세 단계면 충분합니다.
          </p>
        </div>

        <div className="relative mt-section-md grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-5 hidden h-px bg-border sm:block"
          />
          {STEPS.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background font-mono text-caption text-muted-foreground">
                {step.number}
              </div>
              <h3 className="mt-5 text-title-3 text-foreground">
                {step.title}
              </h3>
              <p className="mx-auto mt-text-sm max-w-xs text-body-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
