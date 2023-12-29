"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/utils";
import { DarkModeToggle } from "../dark-mode/toggle";
import {
  PiMagnifyingGlass as SearchIcon,
  PiEquals as HamburgerIcon,
  PiX as CloseIcon,
} from "react-icons/pi";

export function Nav() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
  ];
  const [navIsHidden, setNavIsHidden] = useState(true);
  const toggleNav = () => {
    setNavIsHidden(!navIsHidden);
  };
  return (
    <>
      <nav
        aria-label="Navigation menu"
        className={cn(
          "absolute right-0 top-10 flex flex-col gap-6 rounded bg-highlight px-6 py-3 font-semibold text-love opacity-90 sm:visible sm:left-32 sm:top-[2.25rem] sm:flex-row sm:bg-inherit sm:px-0 sm:py-1 sm:opacity-100 dark:text-rose",
          { invisible: navIsHidden },
        )}
      >
        {navLinks.map((link) => (
          <Link
            href={link.href}
            key={link.name}
            className="hover:text-pine dark:hover:text-foam"
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <div className="flex gap-4 pt-[0.2rem] text-xl sm:gap-6 sm:text-2xl">
        <SearchIcon />
        <DarkModeToggle />
        <button onClick={toggleNav} className="sm:hidden">
          {navIsHidden ? <HamburgerIcon /> : <CloseIcon />}
        </button>
      </div>
    </>
  );
}
