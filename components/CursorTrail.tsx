"use client";

import { useEffect, useRef, useState } from "react";

const SPRITES = ["✨", "💰", "🔥", "🚀", "111"] as const;

type Particle = {
  id: number;
  x: number;
  y: number;
  sprite: (typeof SPRITES)[number];
};

export function CursorTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const indexRef = useRef(0);
  const lastRef = useRef(0);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const now = performance.now();
      if (now - lastRef.current < 32) return;
      lastRef.current = now;

      const sprite = SPRITES[indexRef.current % SPRITES.length];
      indexRef.current += 1;
      const id = now + Math.random();
      const particle: Particle = {
        id,
        x: event.clientX,
        y: event.clientY,
        sprite,
      };

      setParticles((prev) => [...prev.slice(-28), particle]);
      window.setTimeout(() => {
        setParticles((prev) => prev.filter((item) => item.id !== id));
      }, 700);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="trail-bit"
          style={{ left: particle.x, top: particle.y }}
        >
          {particle.sprite}
        </span>
      ))}
    </>
  );
}
