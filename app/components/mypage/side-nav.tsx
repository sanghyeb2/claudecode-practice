"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const MYPAGE_NAV = [
  { label: "내 정보", href: "/mypage/profile", segment: "profile" },
  { label: "기능 관리", href: "/mypage/features", segment: "features" },
];

export function MypageSideNav() {
  const segment = useSelectedLayoutSegment();

  return (
    <aside className="md:sticky md:top-safe-t md:w-56 md:shrink-0 md:self-start">
      <nav
        aria-label="마이페이지 메뉴"
        className="flex flex-col gap-field-sm"
      >
        {MYPAGE_NAV.map((item) => {
          const isActive = segment === item.segment;

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`rounded-md px-inline-md py-field-sm text-label-md transition-colors ${
                isActive
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
