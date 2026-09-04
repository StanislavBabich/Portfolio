"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const GAP = 16;
const HOVER_LIFT = 16;

function visibleLimit(width: number) {
  if (width >= 1024) return 6;
  if (width >= 768) return 4;
  return 3;
}

function rowsToFit(width: number) {
  if (width >= 1024) return 2;
  if (width >= 768) return 2;
  return 3;
}

function colsAt(width: number) {
  if (width >= 1024) return 3;
  if (width >= 768) return 2;
  return 1;
}

export function WorksScroller({
  children,
  cardCount,
  cardSelector = ".cyber-card",
  className = "cyber-scrollbar",
}: {
  children: ReactNode;
  cardCount: number;
  cardSelector?: string;
  className?: string;
}) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<number | null>(null);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    const measure = () => {
      const width = window.innerWidth;
      const limit = visibleLimit(width);
      const cards = Array.from(box.querySelectorAll<HTMLElement>(cardSelector));

      if (cardCount <= limit || cards.length === 0) {
        setMaxHeight(null);
        return;
      }

      const cols = colsAt(width);
      const rows = rowsToFit(width);
      let height = 0;

      for (let row = 0; row < rows; row += 1) {
        let rowHeight = 0;
        for (let col = 0; col < cols; col += 1) {
          const card = cards[row * cols + col];
          if (card) {
            rowHeight = Math.max(rowHeight, card.offsetHeight);
          }
        }
        if (rowHeight > 0) {
          height += rowHeight;
          if (row > 0) height += GAP;
        }
      }

      setMaxHeight(height);
    };

    measure();
    const observer = new ResizeObserver(() => measure());
    observer.observe(box);
    const images = Array.from(box.querySelectorAll("img"));
    images.forEach((img) => img.addEventListener("load", measure));
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      images.forEach((img) => img.removeEventListener("load", measure));
      window.removeEventListener("resize", measure);
    };
  }, [cardCount, cardSelector]);

  const scrolling = maxHeight !== null;

  return (
    <div
      ref={boxRef}
      id="works"
      className={`${className} pt-4 pr-2 ${scrolling ? "overflow-y-auto" : "overflow-visible"}`}
      style={scrolling ? { maxHeight: maxHeight + HOVER_LIFT } : undefined}
    >
      {children}
    </div>
  );
}
