"use client";

import { useEffect, useState } from "react";
import { CyberSite } from "@/components/CyberSite";
import { ThemeModal } from "@/components/ThemeModal";
import { TrashSite } from "@/components/TrashSite";
import { THEME_KEY, type ThemeName } from "@/lib/site-data";

export function ThemeApp() {
  const [theme, setTheme] = useState<ThemeName | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(THEME_KEY);
    if (saved === "trash" || saved === "cyber") {
      setTheme(saved);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!theme) {
      document.documentElement.removeAttribute("data-theme");
      return;
    }
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const pick = (next: ThemeName) => {
    window.localStorage.setItem(THEME_KEY, next);
    setTheme(next);
  };

  const reset = () => {
    window.localStorage.removeItem(THEME_KEY);
    setTheme(null);
  };

  if (!ready) {
    return <div className="min-h-screen bg-black" />;
  }

  return (
    <>
      {!theme && <ThemeModal onPick={pick} />}
      {theme === "trash" && <TrashSite onSwitchTheme={reset} />}
      {theme === "cyber" && <CyberSite onSwitchTheme={reset} />}
    </>
  );
}
