"use client";

import { useEffect, useState } from "react";
import { CyberStage } from "@/components/CyberStage";
import { WorksScroller } from "@/components/WorksScroller";
import { PROJECTS } from "@/lib/site-data";

const SUBLINE =
  "Building high-performance web applications, resilient systems, and pixel-perfect user interfaces.";

function TypeLine({ text }: { text: string }) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    setShown("");
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) window.clearInterval(id);
    }, 28);
    return () => window.clearInterval(id);
  }, [text]);

  return (
    <p className="cyber-type m-0 max-w-3xl overflow-hidden font-mono text-sm tracking-[-0.04em] text-[#e6e6e6] sm:text-base">
      {shown}
    </p>
  );
}

export function CyberSite() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-[#f2f2f2]">
      <CyberStage />

      <div className="relative z-10 mx-auto min-h-screen w-full max-w-6xl px-5 py-10 sm:px-8">
        <header className="mb-14">
          <p className="mb-3 font-mono text-[11px] tracking-[0.32em] text-[#ff0033] uppercase">
            ACCESS GRANTED
          </p>
          <h1
            className="m-0 max-w-4xl text-3xl leading-[1.15] font-semibold tracking-tight sm:text-5xl"
            style={{ textShadow: "0 0 24px rgba(255,0,51,0.45)" }}
          >
            STANISLAV BABICH // FULL-STACK WEB DEVELOPMENT
          </h1>
          <div className="mt-5">
            <TypeLine text={SUBLINE} />
          </div>
        </header>

        <section
          id="about"
          className="mb-12 grid gap-8 border border-[#ff0033]/20 bg-[#161616]/80 p-6 shadow-[inset_0_0_40px_rgba(255,0,51,0.08)] lg:grid-cols-[240px_1fr]"
        >
          <div className="relative overflow-hidden border border-white/15">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/IMG_20260830_042901_211.jpg"
              alt="Stanislav Babich"
              className="block h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="mb-2 font-mono text-[11px] tracking-[0.24em] text-[#ff0033] uppercase">
              ABOUT_ME //
            </p>
            <p className="mb-5 max-w-2xl text-sm leading-7 text-[#cfcfcf] sm:text-base">
              I am a highly efficient Full-Stack Developer specializing in rapid
              web development. I build fast, fully responsive landing pages and
              web applications using React, Next.js, and Node.js/Go. My main
              focus is execution speed, clean layout, and delivering
              ready-to-launch business products in short timeframes.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "JavaScript (ES6+)",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Go",
                "Python",
                "PostgreSQL",
                "MongoDB",
                "REST / GraphQL",
                "Git",
                "Vercel",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-[#ff0033]/30 bg-[#161616] px-2 py-1 font-mono text-xs text-[#ff0033]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <p className="mb-4 font-mono text-[11px] tracking-[0.24em] text-[#ff0033] uppercase">
            Selected work
          </p>
          <WorksScroller
            cardCount={PROJECTS.length}
            cardSelector=".cyber-card"
            className="cyber-scrollbar"
          >
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((project) => (
                <a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="cyber-card cyber-grid-bg group block rounded-xl border border-white/10 p-3 no-underline transition duration-300 hover:-translate-y-1 hover:border-[#ff0033]/70 hover:shadow-[0_0_28px_rgba(255,0,51,0.28)]"
                >
                  <p className="mb-2 font-mono text-[11px] tracking-[0.16em] text-[#ff0033]">
                    {project.title}
                  </p>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.preview}
                    alt={project.alt}
                    className="aspect-video h-auto w-full rounded-lg bg-black object-contain object-top"
                  />
                </a>
              ))}
            </div>
          </WorksScroller>
        </section>

        <section
          id="requirements"
          className="mb-16 border border-[#ff0033]/20 bg-[#161616]/80 p-6 transition duration-300 hover:border-[#ff0033]/50 hover:shadow-[0_0_28px_rgba(255,0,51,0.16)]"
        >
          <h2 className="mt-0 mb-5 font-mono text-sm tracking-[0.08em] text-[#ff0033] sm:text-base">
            PROJECT REQUIREMENTS // WHAT WE NEED TO START
          </h2>
          <ul className="m-0 mb-5 list-none space-y-3 p-0 text-sm leading-6 text-[#cfcfcf]">
            <li className="border border-white/10 px-3 py-3">
              📄 Technical specifications (PRD/Brief) or a detailed description
              of your idea/website logic.
            </li>
            <li className="border border-white/10 px-3 py-3">
              🎨 Figma / Sketch / Adobe XD layout (if available). If you
              don&apos;t have a design, we can create it from scratch.
            </li>
            <li className="border border-white/10 px-3 py-3">
              🔤 Text content, logos, media files, and branding materials to be
              placed on the site.
            </li>
            <li className="border border-white/10 px-3 py-3">
              🔑 Hosting/domain access credentials (required at the deployment
              stage).
            </li>
          </ul>
          <p className="m-0 border-l-2 border-[#ff0033] pl-3 text-sm leading-6 text-[#e8e8e8]">
            ⚠️ If you don&apos;t have a ready brief or design, no worries! Send
            me a message, and we will discuss all the details directly in the
            chat, map out the requirements, and choose the best technical
            solution for your project.
          </p>
        </section>

        <footer className="border-t border-white/10 pt-6 pb-10 text-xs text-[#777]">
          Stanislav Babich - full-stack web development
        </footer>
      </div>
    </div>
  );
}
