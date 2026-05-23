import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.brand.name} ${site.brand.suffix} — Halal Middle Eastern Grill, Etobicoke`,
  description: site.brand.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
