"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

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
      className={className}
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      Theme
    </button>
  );
};
