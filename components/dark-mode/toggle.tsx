"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "@phosphor-icons/react";

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
      {theme === "dark" ? <Moon /> : <Sun />}
    </button>
  );
};
