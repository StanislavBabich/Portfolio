export const PROJECTS = [
  {
    href: "https://mesto-project-ff-theta.vercel.app/",
    title: "MESTO",
    preview:
      "https://api.microlink.io/?url=https://mesto-project-ff-theta.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    alt: "превью сайта Mesto",
  },
  {
    href: "https://skill-swap-45-2-bv4v.vercel.app",
    title: "SKILL SWAP",
    preview:
      "https://api.microlink.io/?url=https://skill-swap-45-2-bv4v.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    alt: "превью сайта Skill Swap",
  },
  {
    href: "https://sun-stricke-eyli.vercel.app/",
    title: "SUNSTRIKE",
    preview:
      "https://api.microlink.io/?url=https://sun-stricke-eyli.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    alt: "превью сайта SunStrike",
  },
  {
    href: "https://film-react-nest-4ugx.vercel.app/",
    title: "FILM!",
    preview:
      "https://api.microlink.io/?url=https://film-react-nest-4ugx.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    alt: "превью сайта Film!",
  },
  {
    href: "https://lumen-two-amber.vercel.app",
    title: "LUMEN TWO AMBER",
    preview:
      "https://api.microlink.io/?url=https://lumen-two-amber.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    alt: "превью сайта Lumen Two Amber",
  },
  {
    href: "https://dungeon-sinth.vercel.app",
    title: "DUNGEON SYNTH",
    preview:
      "https://api.microlink.io/?url=https://dungeon-sinth.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    alt: "превью сайта Dungeon Synth",
  },
  {
    href: "https://buy-hryunyasha.vercel.app",
    title: "ХРЮНЯША",
    preview:
      "https://api.microlink.io/?url=https://buy-hryunyasha.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    alt: "превью сайта Хрюняша",
  },
  {
    href: "https://vista-lore-6jx7.vercel.app/",
    title: "VISTA LORE",
    preview:
      "https://api.microlink.io/?url=https://vista-lore-6jx7.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    alt: "превью сайта Vista Lore",
  },
  {
    href: "https://stellar-burgers-sooty.vercel.app/",
    title: "STELLAR BURGERS",
    preview: "/stellar-burgers-preview.png",
    alt: "превью сайта Stellar Burgers",
  },
] as const;

export const CONTACTS = [
  {
    href: "mailto:stanislavbabich12081994@gmail.com",
    label: "stanislavbabich12081994@gmail.com",
    trashLabel: "✉ МЫЛО: stanislavbabich12081994@gmail.com",
    kind: "mail" as const,
  },
  {
    href: "tel:+79775090347",
    label: "+7 977 509 03 47",
    trashLabel: "☎ ТЕЛЕФОН: +7 977 509 03 47",
    kind: "phone" as const,
  },
  {
    href: "https://t.me/StanislavBabichch",
    label: "@StanislavBabichch",
    trashLabel: "✈ TELEGRAM: @StanislavBabichch",
    kind: "telegram" as const,
  },
] as const;

export type ThemeName = "trash" | "cyber";
