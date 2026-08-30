"use client";

import type { ThemeName } from "@/lib/site-data";

export function ThemeModal({
  onPick,
}: {
  onPick: (theme: ThemeName) => void;
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md">
      <div className="w-full max-w-lg border border-white/10 bg-[#0c0c0c]/90 p-8 shadow-[0_0_80px_rgba(0,0,0,0.8)]">
        <p className="mb-2 font-mono text-[11px] tracking-[0.28em] text-white/40 uppercase">
          SYSTEM // BOOT
        </p>
        <h2 className="m-0 mb-6 text-xl leading-tight font-semibold tracking-tight text-white sm:text-2xl">
          ВЫБЕРИТЕ РЕЖИМ ОТОБРАЖЕНИЯ САЙТА / SELECT VIEW MODE
        </h2>
        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={() => onPick("trash")}
            className="border border-yellow-400/40 bg-[#1a1200] px-4 py-3 text-left text-sm font-semibold text-yellow-300 transition hover:border-yellow-300 hover:bg-[#2a1c00]"
          >
            🔥 RETRO PORTFOLIO (Web 1.0 Режим)
          </button>
          <button
            type="button"
            onClick={() => onPick("cyber")}
            className="border border-[#ff0033]/40 bg-[#140006] px-4 py-3 text-left text-sm font-semibold text-[#ff4d6d] transition hover:border-[#ff0033] hover:bg-[#22000a]"
          >
            💻 PREMIUM DESIGN (Современный Режим)
          </button>
        </div>
      </div>
    </div>
  );
}
