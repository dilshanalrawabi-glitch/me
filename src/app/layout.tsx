import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammed Dilshan | Software Developer",
  description:
    "Software Developer at Al Rawabi Group of Companies, Qatar. React.js, Frontend & Python. BCA 2023.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen font-sans antialiased bg-surface-950 text-surface-50">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
