import type { Metadata } from "next";
import { League_Spartan, DM_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { Providers } from "./components/providers";
import { ProgressBar } from "./components/progress-bar";

const leagueSpartan = League_Spartan({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.brand.name} ${site.brand.suffix} — Halal Afghan Grill, Toronto`,
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
      className={`${leagueSpartan.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Providers>
          <ProgressBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
