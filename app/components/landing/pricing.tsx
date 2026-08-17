import { IconCheck } from "./icons";

const PLANS = [
  {
    name: "Community",
    price: "무료",
    description: "오픈소스 레지스트리를 자유롭게 사용하세요.",
    features: [
      "모든 퍼블릭 블록 무제한 설치",
      "CLI 도구 전체 기능",
      "커뮤니티 Discord 지원",
      "MIT 라이선스",
    ],
    cta: "무료로 시작하기",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "월 $19",
    description: "팀 단위로 협업하고 프라이빗 블록을 관리하세요.",
    features: [
      "Community 플랜의 모든 기능",
      "프라이빗 레지스트리 호스팅",
      "팀 단위 블록 공유 및 버전 관리",
      "우선 지원 및 SLA",
    ],
    cta: "Pro 시작하기",
    highlighted: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-border py-section-lg">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-title-2 tracking-tight text-foreground">
            심플한 가격 정책
          </h2>
          <p className="mt-text-sm text-muted-foreground">
            핵심 레지스트리는 언제나 무료입니다. 팀에는 Pro를 추천해요.
          </p>
        </div>

        <div className="mx-auto mt-section-md grid max-w-layout-md grid-cols-1 gap-grid-gutter-x sm:grid-cols-2">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-8 ${
                plan.highlighted
                  ? "border-foreground/20 bg-card"
                  : "border-border bg-card/40"
              }`}
            >
              <h3 className="text-title-3 text-muted-foreground">
                {plan.name}
              </h3>
              <div className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                {plan.price}
              </div>
              <p className="mt-text-sm text-body-sm text-muted-foreground">{plan.description}</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-inline-sm text-body-sm text-muted-foreground"
                  >
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-field-lg block rounded-md px-4 py-2.5 text-center text-label-lg transition-colors ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border text-foreground hover:border-foreground/25 hover:bg-foreground/5"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
