"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { PiSun as SunIcon, PiMoon as MoonIcon } from "react-icons/pi";

type DarkModeToggleProps = {
  className?: string;
};

export const DarkModeToggle = ({ className }: DarkModeToggleProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <button
      aria-label="Toggle dark mode"
      className={className}
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {theme === "dark" ? (
        <MoonIcon className="-rotate-12 -scale-x-100" />
      ) : (
        <SunIcon />
      )}
    </button>
  );
};
