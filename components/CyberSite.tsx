"use client";

import { useEffect, useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { CyberStage } from "@/components/CyberStage";
import { WorksScroller } from "@/components/WorksScroller";
import { CONTACTS, PROJECTS } from "@/lib/site-data";

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

const ICONS = {
  mail: Mail,
  phone: Phone,
  telegram: Send,
};

export function CyberSite({ onSwitchTheme }: { onSwitchTheme: () => void }) {
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
            <h2 className="mt-0 mb-4 text-2xl font-medium">Обо мне</h2>
            <p className="mb-5 max-w-2xl text-sm leading-7 text-[#cfcfcf] sm:text-base">
              Специализируюсь на высокопроизводительных веб-приложениях и
              масштабируемой бэкенд-архитектуре. Собираю отказоустойчивые
              SPA/SSR на React и Next.js и микросервисы на Go. Фокус - чистый
              код, скорость загрузки и аккуратная работа с данными.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "JavaScript (ES6+)",
                "TypeScript",
                "Go",
                "React",
                "Next.js",
                "Angular",
                "Node.js",
                "PostgreSQL",
                "MongoDB",
                "REST / GraphQL",
                "Docker",
                "Git",
                "Vercel",
                "Linux",
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
          id="matrix"
          className="mb-12 border border-white/10 bg-[#111]/80 p-6"
        >
          <p className="mb-4 font-mono text-[11px] tracking-[0.24em] text-[#ff0033] uppercase">
            Secure channel
          </p>
          <h2 className="mt-0 mb-5 text-2xl font-medium">Контакты</h2>
          <div className="flex flex-col gap-3">
            {CONTACTS.map((contact) => {
              const Icon = ICONS[contact.kind];
              const external = contact.href.startsWith("http");
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="flex items-center gap-3 border border-white/10 px-4 py-3 text-sm text-[#e8e8e8] no-underline transition-colors duration-300 hover:border-[#ff0033] hover:text-[#ff0033]"
                >
                  <Icon size={16} strokeWidth={1.6} />
                  {contact.label}
                </a>
              );
            })}
          </div>
        </section>

        <section id="pricing" className="mb-12">
          <p className="mb-4 font-mono text-[11px] tracking-[0.24em] text-[#ff0033] uppercase">
            Прайс-лист / тарифы
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                name: "LANDING PAGE",
                price: "от 8 000 ₽",
                meta: "Срок: 3-5 дней",
                desc: "Адаптив, SEO, анимации",
              },
              {
                name: "MULTI-PAGE SITE",
                price: "от 18 000 ₽",
                meta: "Срок: 5-10 дней",
                desc: "Структура, админка, скорость",
              },
              {
                name: "CUSTOM REACT / NEXT.JS",
                price: "от 25 000 ₽",
                meta: "Срок: индивидуально",
                desc: "Ультра-интерактив, SPA, высокая производительность",
              },
            ].map((plan) => (
              <article
                key={plan.name}
                className="cyber-grid-bg flex flex-col rounded-xl border border-[#ff0033]/25 bg-[#161616] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#ff0033]/70 hover:shadow-[0_0_28px_rgba(255,0,51,0.28)]"
              >
                <p className="m-0 font-mono text-[11px] tracking-[0.18em] text-[#ff0033]">
                  {plan.name}
                </p>
                <p className="mt-3 mb-1 text-2xl font-medium">{plan.price}</p>
                <p className="m-0 text-xs text-white/45">{plan.meta}</p>
                <p className="mt-3 mb-6 min-h-12 text-sm leading-6 text-[#cfcfcf]">
                  {plan.desc}
                </p>
                <a
                  href="https://t.me/StanislavBabichch"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto block border border-[#ff0033] px-4 py-2 text-center font-mono text-xs tracking-[0.16em] text-[#ff0033] no-underline transition-colors hover:bg-[#ff0033] hover:text-white"
                >
                  ЗАКАЗАТЬ / ORDER
                </a>
              </article>
            ))}
          </div>
        </section>

        <section
          id="requirements"
          className="mb-16 border border-[#ff0033]/20 bg-[#161616]/80 p-6 transition duration-300 hover:border-[#ff0033]/50 hover:shadow-[0_0_28px_rgba(255,0,51,0.16)]"
        >
          <h2 className="mt-0 mb-5 font-mono text-sm tracking-[0.08em] text-[#ff0033] sm:text-base">
            REQUIREMENTS // ЧТО ТРЕБУЕТСЯ ДЛЯ СТАРТА ПРОЕКТА
          </h2>
          <ul className="m-0 mb-5 list-none space-y-3 p-0 text-sm leading-6 text-[#cfcfcf]">
            <li className="border border-white/10 px-3 py-3">
              📁 Техническое задание (ТЗ) или подробное описание вашей идеи/логики
              сайта.
            </li>
            <li className="border border-white/10 px-3 py-3">
              🎨 Макет в Figma / Sketch / Photoshop (при наличии). Если дизайна
              нет - разработаем с нуля.
            </li>
            <li className="border border-white/10 px-3 py-3">
              🖼 Текстовые материалы, логотипы, медиа-файлы и брендинг, которые
              необходимо разместить.
            </li>
            <li className="border border-white/10 px-3 py-3">
              🔑 Доступы к хостингу/домену (потребуются на этапе деплоя).
            </li>
          </ul>
          <p className="m-0 border-l-2 border-[#ff0033] pl-3 text-sm leading-6 text-[#e8e8e8]">
            ⚠️ Если у вас нет готового ТЗ или макета - не переживайте. Напишите
            мне, мы детально обсудим все нюансы вашего проекта, сформируем
            требования и подберем оптимальное техническое решение.
          </p>
        </section>

        <footer className="border-t border-white/10 pt-6 pb-10 text-xs text-[#777]">
          Stanislav Babich - full-stack web development
        </footer>
      </div>

      <button
        type="button"
        onClick={onSwitchTheme}
        className="fixed right-4 bottom-4 z-50 border border-white/20 bg-black/70 px-3 py-2 font-mono text-[11px] tracking-wider text-white/70 uppercase backdrop-blur transition hover:border-[#ff0033] hover:text-[#ff0033]"
      >
        Switch mode
      </button>
    </div>
  );
}
