import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Overpass, Overpass_Mono } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "@/components/dark-mode/provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const overpass = Overpass({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-overpass",
});

const overpassMono = Overpass_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-overpass-mono",
});

export const metadata: Metadata = {
  title: "Peter Jun Park",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${overpass.variable} ${overpassMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <DarkModeProvider
          enableSystem
          defaultTheme="system"
          attribute="class"
          disableTransitionOnChange
        >
          <Header />
          <TooltipProvider>
            <main>{children}</main>
          </TooltipProvider>
          <Footer />
        </DarkModeProvider>
        <Analytics />
      </body>
    </html>
  );
}
