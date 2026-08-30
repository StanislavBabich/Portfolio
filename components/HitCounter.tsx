"use client";

import { useEffect, useState } from "react";

const BASE = 1337007;

export function HitCounter() {
  const [hits, setHits] = useState(BASE);

  useEffect(() => {
    const key = "mega-saitodel-hits";
    const stored = Number(window.localStorage.getItem(key) || 0);
    const next = (stored || BASE) + 1;
    window.localStorage.setItem(key, String(next));
    setHits(next);
  }, []);

  return (
    <span className="counter-lcd">{String(hits).padStart(8, "0")}</span>
  );
}
