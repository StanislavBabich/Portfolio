"use client";

import { useEffect, useState } from "react";
import { CyberSite } from "@/components/CyberSite";
import { ThemeModal } from "@/components/ThemeModal";
import { TrashSite } from "@/components/TrashSite";
import { type ThemeName } from "@/lib/site-data";

export function ThemeApp() {
  const [theme, setTheme] = useState<ThemeName | null>(null);

  useEffect(() => {
    if (!theme) {
      document.documentElement.removeAttribute("data-theme");
      return;
    }
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const pick = (next: ThemeName) => {
    setTheme(next);
  };

  const reset = () => {
    setTheme(null);
  };

  return (
    <>
      {!theme && <ThemeModal onPick={pick} />}
      {theme === "trash" && <TrashSite onSwitchTheme={reset} />}
      {theme === "cyber" && <CyberSite onSwitchTheme={reset} />}
    </>
  );
}
