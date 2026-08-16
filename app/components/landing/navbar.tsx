import Link from "next/link";
import { IconGithub, IconStar, IconTerminal } from "./icons";

const NAV_LINKS = [
  { label: "컴포넌트", href: "#registry" },
  { label: "기능", href: "#features" },
  { label: "사용법", href: "#how-it-works" },
  { label: "가격", href: "#pricing" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="#top" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-white/15 bg-white/5">
            <IconTerminal className="h-4 w-4 text-white" />
          </span>
          <span className="font-mono text-[15px] font-semibold tracking-tight text-white">
            claudecode-practice
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden items-center gap-1.5 rounded-md border border-white/10 px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:border-white/25 hover:text-white sm:flex"
          >
            <IconGithub className="h-4 w-4" />
            <span className="text-zinc-400">·</span>
            <span className="flex items-center gap-1 text-zinc-400">
              <IconStar className="h-3.5 w-3.5 text-amber-400" />
              12.4k
            </span>
          </a>
          <a
            href="#registry"
            className="rounded-md bg-white px-3.5 py-1.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
          >
            시작하기
          </a>
        </div>
      </div>
    </header>
  );
}
