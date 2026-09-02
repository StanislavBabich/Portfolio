function screenshotUrl(url: string, waitForSelector = "h1") {
  const params = new URLSearchParams({
    url,
    screenshot: "true",
    meta: "false",
    embed: "screenshot.url",
    waitUntil: "load",
    waitForTimeout: "4000",
    waitForSelector,
    "screenshot.fullPage": "true",
    "viewport.width": "1280",
    "viewport.height": "800",
  });
  return `https://api.microlink.io/?${params.toString()}`;
}

export const PROJECTS = [
  {
    href: "https://vista-lore-6jx7.vercel.app/",
    title: "VISTA LORE",
    preview: screenshotUrl("https://vista-lore-6jx7.vercel.app/"),
    alt: "превью сайта Vista Lore",
  },
  {
    href: "https://lumen-two-amber.vercel.app",
    title: "LUMEN TWO AMBER",
    preview: screenshotUrl("https://lumen-two-amber.vercel.app"),
    alt: "превью сайта Lumen Two Amber",
  },
  {
    href: "https://stellar-burgers-sooty.vercel.app/",
    title: "STELLAR BURGERS",
    preview: "/stellar-burgers-preview.png",
    alt: "превью сайта Stellar Burgers",
  },
  {
    href: "https://film-react-nest-4ugx.vercel.app/",
    title: "FILM!",
    preview: screenshotUrl("https://film-react-nest-4ugx.vercel.app/", "h1"),
    alt: "превью сайта Film!",
  },
  {
    href: "https://dungeon-sinth.vercel.app",
    title: "DUNGEON SYNTH",
    preview: screenshotUrl("https://dungeon-sinth.vercel.app"),
    alt: "превью сайта Dungeon Synth",
  },
  {
    href: "https://skill-swap-45-2-bv4v.vercel.app",
    title: "SKILL SWAP",
    preview: screenshotUrl("https://skill-swap-45-2-bv4v.vercel.app"),
    alt: "превью сайта Skill Swap",
  },
  {
    href: "https://mesto-project-ff-theta.vercel.app/",
    title: "MESTO",
    preview: screenshotUrl("https://mesto-project-ff-theta.vercel.app/"),
    alt: "превью сайта Mesto",
  },
  {
    href: "https://sun-stricke-eyli.vercel.app/",
    title: "SUNSTRIKE",
    preview: screenshotUrl("https://sun-stricke-eyli.vercel.app/"),
    alt: "превью сайта SunStrike",
  },
  {
    href: "https://buy-hryunyasha.vercel.app",
    title: "ХРЮНЯША",
    preview: screenshotUrl("https://buy-hryunyasha.vercel.app"),
    alt: "превью сайта Хрюняша",
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
