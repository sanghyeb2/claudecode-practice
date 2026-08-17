import { IconGithub, IconTerminal } from "./icons";

const FOOTER_LINKS = [
  {
    heading: "제품",
    links: ["컴포넌트", "템플릿", "CLI", "변경 이력"],
  },
  {
    heading: "리소스",
    links: ["문서", "가이드", "예제", "블로그"],
  },
  {
    heading: "커뮤니티",
    links: ["GitHub", "Discord", "X (Twitter)", "기여 가이드"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-section-lg">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-grid-gutter-x sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-inline-sm">
              <span className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-foreground/5">
                <IconTerminal className="h-4 w-4 text-foreground" />
              </span>
              <span className="font-mono text-sm font-semibold text-foreground">
                claudecode-practice
              </span>
            </div>
            <p className="mt-3 text-body-sm text-muted-foreground">
              풀스택 기능을 위한 오픈소스 컴포넌트 레지스트리.
            </p>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.heading}>
              <h4 className="text-sm font-medium text-foreground">
                {group.heading}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-label-md text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-section-md flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-caption text-tertiary">
            © 2026 CLAUDECODE-PRACTICE. MIT 라이선스로 배포됩니다.
          </p>
          <a
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <IconGithub className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
