import {
  IconCart,
  IconChart,
  IconCreditCard,
  IconLock,
  IconMessage,
  IconUpload,
} from "./icons";

const BLOCKS = [
  {
    icon: IconLock,
    slug: "auth",
    title: "Authentication",
    description: "이메일/OAuth 로그인, 세션 관리, 미들웨어 보호까지.",
    stack: ["Auth.js", "Middleware", "PostgreSQL"],
  },
  {
    icon: IconCreditCard,
    slug: "payments-stripe",
    title: "Payments",
    description: "구독 결제, Webhook 처리, 인보이스 UI가 포함된 결제 블록.",
    stack: ["Stripe", "Webhooks", "Server Actions"],
  },
  {
    icon: IconChart,
    slug: "admin-dashboard",
    title: "Admin Dashboard",
    description: "데이터 테이블, 차트, 역할 기반 접근 제어(RBAC)까지.",
    stack: ["Data Table", "Charts", "RBAC"],
  },
  {
    icon: IconMessage,
    slug: "ai-chat",
    title: "AI Chat",
    description: "스트리밍 응답, 대화 기록 저장, RAG 검색이 붙은 채팅 UI.",
    stack: ["Streaming", "Vector DB", "RAG"],
  },
  {
    icon: IconCart,
    slug: "storefront",
    title: "E-commerce",
    description: "장바구니, 체크아웃, 재고 관리가 연결된 쇼핑 플로우.",
    stack: ["Cart", "Checkout", "Inventory"],
  },
  {
    icon: IconUpload,
    slug: "file-upload",
    title: "File Upload",
    description: "프리사인드 URL 업로드와 이미지 최적화 파이프라인.",
    stack: ["S3", "Presigned URL", "Image Processing"],
  },
];

export function RegistryShowcase() {
  return (
    <section id="registry" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-title-2 tracking-tight text-foreground">
              레지스트리 둘러보기
            </h2>
            <p className="mt-text-sm max-w-xl text-muted-foreground">
              120개 이상의 풀스택 블록. 필요한 기능을 찾아 명령어 한 줄로
              설치하세요.
            </p>
          </div>
          <a
            href="#"
            className="shrink-0 rounded-md border border-border px-4 py-2 text-label-md text-foreground transition-colors hover:border-foreground/25 hover:bg-foreground/5"
          >
            전체 컴포넌트 보기
          </a>
        </div>

        <div className="mt-section-md grid grid-cols-1 gap-grid-gutter-x sm:grid-cols-2 lg:grid-cols-3">
          {BLOCKS.map((block) => (
            <div
              key={block.slug}
              className="group flex flex-col rounded-xl border border-border bg-card/40 p-6 transition-colors hover:border-foreground/25 hover:bg-card"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-foreground/5">
                <block.icon className="h-4.5 w-4.5 text-muted-foreground" />
              </span>
              <h3 className="mt-4 text-title-3 text-foreground">
                {block.title}
              </h3>
              <p className="mt-text-sm text-body-sm text-muted-foreground">
                {block.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-inline-md">
                {block.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-foreground/5 px-2 py-0.5 text-caption text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-inline-sm rounded-md border border-border bg-background px-3 py-2 font-mono text-xs text-muted-foreground">
                <span className="text-secondary-400">$</span>
                npx claudecode-practice add {block.slug}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
