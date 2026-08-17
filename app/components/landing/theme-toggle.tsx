"use client";

import { useState } from "react";
import { IconMoon, IconSun } from "./icons";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  function toggleTheme() {
    document.documentElement.classList.toggle("dark");
    setIsDark((prev) => !prev);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="다크/라이트 모드 전환"
      className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-foreground/5 text-muted-foreground transition-colors hover:border-foreground/25 hover:text-foreground"
    >
      {isDark ? (
        <IconSun className="h-4 w-4" />
      ) : (
        <IconMoon className="h-4 w-4" />
      )}
    </button>
  );
}
