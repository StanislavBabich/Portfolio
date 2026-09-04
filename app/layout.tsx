import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jb",
});

export const metadata: Metadata = {
  title: "Stanislav Babich - Web Development / Cybersecurity",
  description:
    "Portfolio of Stanislav Babich. Full-stack development and security-minded engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
