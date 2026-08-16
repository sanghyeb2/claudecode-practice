import {
  IconCode,
  IconDatabase,
  IconLayers,
  IconLock,
  IconSliders,
  IconZap,
} from "./icons";

const FEATURES = [
  {
    icon: IconLayers,
    title: "코드 소유권 100%",
    description:
      "패키지가 아니라 소스 코드를 프로젝트에 직접 복사합니다. node_modules 뒤에 숨지 않아요.",
  },
  {
    icon: IconDatabase,
    title: "서버까지 포함",
    description:
      "UI 컴포넌트뿐 아니라 API 라우트, 서버 액션, DB 스키마까지 함께 설치됩니다.",
  },
  {
    icon: IconCode,
    title: "타입 안전 엔드투엔드",
    description:
      "DB 스키마부터 클라이언트 컴포넌트까지 TypeScript 타입이 그대로 이어집니다.",
  },
  {
    icon: IconZap,
    title: "프레임워크 네이티브",
    description:
      "Next.js App Router, React Server Components, Server Actions 위에서 그대로 동작합니다.",
  },
  {
    icon: IconSliders,
    title: "원하는 대로 커스터마이징",
    description:
      "블랙박스가 아닙니다. 코드를 열어 스타일, 로직, 스키마를 자유롭게 수정하세요.",
  },
  {
    icon: IconLock,
    title: "프로덕션 검증 완료",
    description:
      "각 블록은 인증, 에러 처리, 엣지 케이스까지 고려해 실무 기준으로 만들어졌습니다.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            프론트엔드 레지스트리, 그 다음 단계
          </h2>
          <p className="mt-4 text-zinc-400">
            컴포넌트 라이브러리는 UI만 줍니다. CLAUDECODE-PRACTICE는 기능
            하나가 동작하는 데 필요한 전체 스택을 함께 드립니다.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group bg-zinc-950 p-8 transition-colors hover:bg-zinc-900/60"
            >
              <feature.icon className="h-5 w-5 text-zinc-500 transition-colors group-hover:text-white" />
              <h3 className="mt-4 text-[15px] font-medium text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
