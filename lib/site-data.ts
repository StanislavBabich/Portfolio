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
    alt: "Vista Lore website preview",
  },
  {
    href: "https://lumen-two-amber.vercel.app",
    title: "LUMEN TWO AMBER",
    preview: screenshotUrl("https://lumen-two-amber.vercel.app"),
    alt: "Lumen Two Amber website preview",
  },
  {
    href: "https://stellar-burgers-sooty.vercel.app/",
    title: "STELLAR BURGERS",
    preview: "/stellar-burgers-preview.png",
    alt: "Stellar Burgers website preview",
  },
  {
    href: "https://film-react-nest-4ugx.vercel.app/",
    title: "FILM!",
    preview: screenshotUrl("https://film-react-nest-4ugx.vercel.app/", "h1"),
    alt: "Film! website preview",
  },
  {
    href: "https://dungeon-sinth.vercel.app",
    title: "DUNGEON SYNTH",
    preview: screenshotUrl("https://dungeon-sinth.vercel.app"),
    alt: "Dungeon Synth website preview",
  },
  {
    href: "https://skill-swap-45-2-bv4v.vercel.app",
    title: "SKILL SWAP",
    preview: screenshotUrl("https://skill-swap-45-2-bv4v.vercel.app"),
    alt: "Skill Swap website preview",
  },
  {
    href: "https://mesto-project-ff-theta.vercel.app/",
    title: "MESTO",
    preview: screenshotUrl("https://mesto-project-ff-theta.vercel.app/"),
    alt: "Mesto website preview",
  },
  {
    href: "https://sun-stricke-eyli.vercel.app/",
    title: "SUNSTRIKE",
    preview: screenshotUrl("https://sun-stricke-eyli.vercel.app/"),
    alt: "SunStrike website preview",
  },
  {
    href: "https://buy-hryunyasha.vercel.app",
    title: "HRYUNYASHA",
    preview: screenshotUrl("https://buy-hryunyasha.vercel.app"),
    alt: "Hryunyasha website preview",
  },
] as const;
