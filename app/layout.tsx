import type { Metadata } from "next";
import { Overpass, Overpass_Mono } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "@/components/dark-mode/provider";

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
    <html lang="en" className={`${overpass.variable} ${overpassMono.variable}`}>
      <body>
        <DarkModeProvider
          enableSystem
          defaultTheme="system"
          attribute="class"
          disableTransitionOnChange
        >
          {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}
