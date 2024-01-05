"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { DarkModeToggle } from "@/components/dark-mode/toggle";
import { navLinks } from "@/site.config";
import {
  PiMagnifyingGlass as SearchIcon,
  PiEquals as HamburgerIcon,
  PiX as CloseIcon,
} from "react-icons/pi";

export function Nav() {
  const [navIsHidden, setNavIsHidden] = useState(true);
  const toggleNav = () => {
    setNavIsHidden(!navIsHidden);
  };
  return (
    <>
      <nav
        aria-label="Navigation menu"
        className={cn(
          "absolute right-0 top-10 flex flex-col gap-6 rounded border border-highlight bg-overlay px-6 py-3 font-semibold text-foam sm:visible sm:left-[9.02rem] sm:top-[2.25rem] sm:flex-row sm:gap-10 sm:border-none sm:bg-inherit sm:px-0 sm:py-2 dark:text-pine",
          { invisible: navIsHidden },
        )}
      >
        {navLinks.map((link) => (
          <Link
            href={link.href}
            key={link.name}
            className="hover:text-rose dark:hover:text-love"
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <div className="flex gap-6 pt-[0.2rem] text-2xl">
        {/* <button className="hover:text-rose dark:hover:text-love"> */}
        {/*   <SearchIcon /> */}
        {/* </button> */}
        <DarkModeToggle className="hover:text-rose dark:hover:text-love" />
        <button
          onClick={toggleNav}
          className="hover:text-rose sm:hidden dark:hover:text-love"
        >
          {navIsHidden ? <HamburgerIcon /> : <CloseIcon />}
        </button>
      </div>
    </>
  );
}
