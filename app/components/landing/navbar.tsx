import Link from "next/link";
import { IconGithub, IconStar, IconTerminal } from "./icons";
import { ThemeToggle } from "./theme-toggle";

const NAV_LINKS = [
  { label: "기능 목록", href: "/features" },
  { label: "컴포넌트", href: "#registry" },
  { label: "기능", href: "#features" },
  { label: "사용법", href: "#how-it-works" },
  { label: "가격", href: "#pricing" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-header border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-gnb max-w-6xl items-center justify-between px-6">
        <Link href="#top" className="flex items-center gap-inline-sm">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-foreground/5">
            <IconTerminal className="h-4 w-4 text-foreground" />
          </span>
          <span className="font-mono text-[15px] font-semibold tracking-tight text-foreground">
            claudecode-practice
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-label-md text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-inline-lg">
          <ThemeToggle />
          <a
            href="#"
            className="hidden items-center gap-inline-sm rounded-md border border-border px-3 py-1.5 text-label-md text-muted-foreground transition-colors hover:border-foreground/25 hover:text-foreground sm:flex"
          >
            <IconGithub className="h-4 w-4" />
            <span className="text-muted-foreground">·</span>
            <span className="flex items-center gap-inline-sm text-muted-foreground">
              <IconStar className="h-3.5 w-3.5 text-accent-400" />
              12.4k
            </span>
          </a>
          <a
            href="#registry"
            className="rounded-md bg-primary px-3.5 py-1.5 text-label-lg text-primary-foreground transition-colors hover:bg-primary/90"
          >
            시작하기
          </a>
        </div>
      </div>
    </header>
  );
}
