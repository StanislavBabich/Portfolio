import type { ReactNode } from "react";
import { CursorTrail } from "@/components/CursorTrail";
import { HitCounter } from "@/components/HitCounter";
import { WorksScroller } from "@/components/WorksScroller";
import { CONTACTS, PROJECTS } from "@/lib/site-data";

function Win95Chrome({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`win95-window ${className}`.trim()}>
      <header className="win95-title">
        <span className="min-w-0 truncate">{title}</span>
        <span className="flex shrink-0 gap-1">
          <button type="button" className="win95-btn" aria-label="свернуть">
            _
          </button>
          <button type="button" className="win95-btn" aria-label="развернуть">
            ▢
          </button>
          <button type="button" className="win95-btn" aria-label="закрыть">
            X
          </button>
        </span>
      </header>
      <div className="min-h-0 flex-1 p-2">{children}</div>
    </section>
  );
}

export function TrashSite({ onSwitchTheme }: { onSwitchTheme: () => void }) {
  return (
    <div className="comic-blast pb-8">
      <CursorTrail />

      <div className="flame-bar" />

      <p className="m-0 bg-black py-1 text-center text-sm font-bold text-yellow-300">
        🔥 САЙТ ОПТИМИЗИРОВАН ДЛЯ БРАУЗЕРА INTERNET EXPLORER 6.0 И РАЗРЕШЕНИЯ
        ЭКРАНА 800х600!!! ЕСЛИ У ВАС ДИЛАП — ПОДОЖДИТЕ ЗАГРУЗКИ ВСЕХ ГИФОК!!!{" "}
        <span className="blink">NEW!!!</span> 🔥
      </p>

      <main className="site-shell">
        <header className="bg-[#000080] px-2 pt-2">
          <p className="m-0 text-center text-xs text-yellow-200">
            <span className="star-spin">★</span> www.mega-saitodel.narod.ru{" "}
            <span className="star-spin">★</span>
          </p>
          <h1 className="rainbow-header">
            МЕГА САЙТОДЕЛ111!!!! ЖЕСТКИЙ ВЕБМАСТЕР АДЫН АДЫН СТАНИСЛАВ БАБИЧ
            РЕАЛЬНО ПОЯВИЛСЯ В СЕТИ ИНТЕРНЕТ!!!
          </h1>
        </header>

        <div className="marquee-bar">
          <div className="marquee-track">
            <span>
              !!! ВНИМАНИЕ !!! СУПЕР КРУТЫЕ САЙТЫ ПОД КЛЮЧ ДОРОГО БЫСТРО БЕЗ СМС
              И РЕГИСТРАЦИИ !!! СКАЧАТЬ ОБОИ НА ТЕЛЕФОН БЕСПЛАТНО !!! ЧИСТЫЙ HTML
              КОД БЕЗ ГМО !!!&nbsp;&nbsp;&nbsp;
            </span>
            <span>
              !!! ВНИМАНИЕ !!! СУПЕР КРУТЫЕ САЙТЫ ПОД КЛЮЧ ДОРОГО БЫСТРО БЕЗ СМС
              И РЕГИСТРАЦИИ !!! СКАЧАТЬ ОБОИ НА ТЕЛЕФОН БЕСПЛАТНО !!! ЧИСТЫЙ HTML
              КОД БЕЗ ГМО !!!&nbsp;&nbsp;&nbsp;
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 p-3 lg:grid lg:grid-cols-[300px_1fr] lg:items-start lg:gap-6">
          <aside className="flex flex-col gap-3 lg:sticky lg:top-4">
            <Win95Chrome title="ВЕБКАМ 320x240 — LIVE!!!">
              <div className="webcam-frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/stas-mega-hacker.jpg"
                  alt="Станислав Бабич — Мега-Хакер-2007 показывает класс"
                />
              </div>
              <p className="mt-2 mb-0 text-center text-xs font-bold">
                <span className="blink text-red-600">● REC</span> Стас Бабич
                ОНЛАЙН
                <br />
                <span className="text-[#000080]">клац-клац по клаве 24/7</span>
              </p>
            </Win95Chrome>

            <Win95Chrome title="меню сайта.htm">
              <nav className="flex flex-col gap-1 text-sm font-bold">
                <a href="#about" className="menu-btn bevel-out bg-[#c0c0c0] px-2 py-1 text-black">
                  ► ОБО МНЕ (ВАЩЕ КРУТО)
                </a>
                <a href="#works" className="menu-btn bevel-out bg-[#c0c0c0] px-2 py-1 text-black">
                  ► МОИ САЙТЫ (ЖМИ!!!)
                </a>
                <a href="#matrix" className="menu-btn bevel-out bg-[#c0c0c0] px-2 py-1 text-black">
                  ► VIP КОНТАКТЫ
                </a>
                <a href="#pricing" className="menu-btn bevel-out bg-[#c0c0c0] px-2 py-1 text-black">
                  ► ЦЕННИК (ЖМИ!!!)
                </a>
                <a href="#requirements" className="menu-btn bevel-out bg-[#c0c0c0] px-2 py-1 text-black">
                  ► ЧО НАДО ПРИНЕСТИ
                </a>
              </nav>
            </Win95Chrome>

            <Win95Chrome title="счётчик.cgi">
              <p className="m-0 text-center text-xs">
                вас посетил
                <br />
                <HitCounter />
                <br />
                й посетитель с 01.01.2006
              </p>
            </Win95Chrome>
          </aside>

          <div className="flex min-w-0 flex-col gap-3">
            <Win95Chrome title="readme_обо_мне.txt — НЕ УДАЛЯТЬ!!!">
              <div id="about" className="bevel-in bg-[#ffffcc] p-3 text-[15px] leading-snug">
                <p className="mt-0 mb-2">
                  <span className="hot-badge">ОБО МНЕ</span>{" "}
                  <span className="star-spin">✨</span>
                </p>
                <p className="m-0 font-bold">
                  Кароче звать Стас, в интернетах известен как Мега-Хакер-2007.
                  Родился в 1994 году от рождества Христова, кодить начал раньше
                  чем ходить!!! Делаю такие сайты, шо у вашей мамы челюсть
                  отвиснет, а пацаны на районе зауважают. Мой код не горит в огне
                  и не тонет в бд!!! 100% ГАРАНТИЯ КАЧЕСТВА ОТ САНЫЧА!!!
                </p>
                <p className="mb-0 text-sm text-[#800000]">
                  скилы: HTML, CSS, TABLE layout, FLASH баннера, PHP
                  &quot;привет мир&quot;, взлом одноклассников (шутка) и Photoshop
                  7.0
                </p>
              </div>
            </Win95Chrome>

            <WorksScroller cardCount={PROJECTS.length}>
              <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {PROJECTS.map((project) => (
                  <Win95Chrome
                    key={project.title}
                    title={project.title}
                    className="flex h-full flex-col"
                  >
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="pixel-frame-link block w-full overflow-hidden"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.preview}
                        alt={project.alt}
                        className="pixel-shot aspect-video h-auto w-full object-cover object-top"
                      />
                    </a>
                  </Win95Chrome>
                ))}
              </div>
            </WorksScroller>

            <Win95Chrome title="matrix_connect.exe">
              <div
                id="matrix"
                className="bg-black p-3 text-center text-[#00ff00]"
              >
                <p className="blink mt-0 mb-2 text-lg font-black text-yellow-300">
                  !!! СЕКРЕТНАЯ VIP-ЗОНА ДЛЯ СВЯЗИ С МАТРИЦЕЙ (СТРОГО ДЛЯ
                  ДЕЛОВЫХ ЛЮДЕЙ) !!!
                </p>
                <div className="flex flex-col gap-2">
                  {CONTACTS.map((contact) => {
                    const external = contact.href.startsWith("http");
                    return (
                      <a
                        key={contact.label}
                        href={contact.href}
                        {...(external
                          ? { target: "_blank", rel: "noreferrer" }
                          : {})}
                        className="bevel-out bg-[#003300] px-2 py-1 text-sm font-bold text-lime-300 no-underline"
                      >
                        {contact.trashLabel}
                      </a>
                    );
                  })}
                </div>
                <p className="mb-0 text-sm text-fuchsia-400">
                  (пишите быстро а то занят кодингом111!!!)
                </p>
              </div>
            </Win95Chrome>

            <Win95Chrome title="ЦЕННИК_ОТ_СТАСА.XLS">
              <div id="pricing" className="space-y-2">
                <div className="bevel-in bg-[#ffffcc] p-2">
                  <b className="block text-[#000080]">ЧИСТО ЛЕНДОС ДЛЯ ПАЦАНОВ — 3 000 руб + жигулевское</b>
                  <span className="text-xs">
                    Сделаю за ночь, конкуренты умрут от зависти
                  </span>
                </div>
                <div className="bevel-in bg-[#ffffcc] p-2">
                  <b className="block text-[#000080]">
                    МЕГАПОРТАЛ ИЗ 100 СТРАНИЦ — 10 000 руб
                  </b>
                  <span className="text-xs">
                    Впихну всё: гостевую книгу, погоду, котиков, твои фотки
                  </span>
                </div>
                <div className="bevel-in bg-[#ffffcc] p-2">
                  <b className="block text-[#800000]">
                    ЭЛИТНЫЙ САЙТ НА РЕАКТИВНОМ ДВИЖКЕ — 20 000 руб
                  </b>
                  <span className="text-xs">
                    Быстрее чем пуля, код без ГМО111!!!!
                  </span>
                </div>
                <a
                  href="https://t.me/StanislavBabichch"
                  target="_blank"
                  rel="noreferrer"
                  className="blink bevel-out mt-1 block w-full bg-[#00ff00] px-3 py-3 text-center text-lg font-black text-black no-underline"
                >
                  СЮДА ЖМИ ДЕНЬГИ ПЛАТИ
                </a>
              </div>
            </Win95Chrome>

            <Win95Chrome title="ИНСТРУКЦИЯ_ДЛЯ_ЗАКАЗЧИКА.TXT">
              <div id="requirements" className="bevel-in space-y-2 bg-[#ffffcc] p-3 text-sm font-bold">
                <p className="mt-0 mb-2">
                  📝 КАРОЧЕ ПИШИТЕ НА ПАЛЬЦАХ ЧО ВООБЩЕ НАДО ДЕЛАТЬ И КАКОЙ САЙТ
                  ВЫ ХОТИТЕ!!11
                </p>
                <p className="my-2">
                  🖼 КИДАЙТЕ КАРТИНКИ, ССЫЛКИ НА КОНКУРЕНТОВ И ВСЯКИЕ КРАСИВЫЕ
                  ШТУКИ ИЗ ИНТЕРНЕТА!!
                </p>
                <p className="my-2">
                  🎨 ЕСЛИ ЕСТЬ РИСУНОК В ФИГМЕ ИЛИ НА САЛФЕТКЕ — ТАЩИТЕ СЮДА,
                  ВСЁ СКОПИРУЮ В ЛУЧШЕМ ВИДЕ!!
                </p>
                <p className="my-2">
                  💰 ГЛАВНОЕ ИМЕТЬ ХОРОШЕЕ НАСТРОЕНИЕ И БЫТЬ НА СВЯЗИ!!!
                </p>
                <p className="mb-0 text-xs text-[#800000]">
                  P.S. ЕСЛИ НИЧЕГО ЭТОГО НЕТ И ВЫ ВООБЩЕ НЕ ШАРИТЕ — НЕ
                  ПАРИТЕСЬ!! ПИШИТЕ В ТЕЛЕГУ, ВСЁ ОБКАШЛЯЕМ, ВСЕ НЮАНСЫ
                  ОБГОВОРИМ И СДЕЛАЕМ ПО КРАСОТЕ111!!!!
                </p>
              </div>
            </Win95Chrome>
          </div>
        </div>

        <footer className="bg-[#000080] px-3 py-3 text-center text-yellow-200">
          <p className="mt-0 mb-2 text-sm font-bold">
            Сайт сделан ручками в Блокноте под пиво и музыку Король и Шут!!! Все
            права защищены законом 2006 года и пацанским словом!!! Кто скопирует
            код — тот редиска!!!
          </p>
          <p className="m-0 text-xs">
            <a href="#about" className="text-link text-cyan-300">
              наверх
            </a>{" "}
            | webring 2007 | netscape now | made in notepad.exe | no gmo html
          </p>
        </footer>
      </main>

      <div className="flame-bar" />

      <button
        type="button"
        onClick={onSwitchTheme}
        className="fixed right-3 bottom-3 z-50 bevel-out bg-[#ffff00] px-2 py-1 text-xs font-black text-black"
      >
        СМЕНИТЬ РЕЖИМ!!!
      </button>
    </div>
  );
}
