import Image from "next/image";
import Link from "next/link";
import { Nav } from "./nav";
import laptopLogo from "@/public/laptop-logo.svg";
import smartphoneLogo from "@/public/smartphone-logo.svg";

export const Header = () => {
  return (
    <header className="relative flex w-full items-start justify-between sm:pb-6">
      <div className="flex flex-row-reverse">
        <Link
          href="/"
          className="peer absolute right-0 top-12 h-fit pl-[0.95rem] sm:static"
        >
          <span className="text-[1.33rem] font-semibold -tracking-[0.1rem] sm:text-[1.75rem] sm:tracking-normal">
            Peter Jun Park
          </span>
        </Link>
        <Link
          href="/"
          className="select-none saturate-[.25] hover:filter-none peer-hover:filter-none"
        >
          <Image
            src={laptopLogo}
            alt="Isometric laptop logo"
            priority
            className="hidden w-32 sm:block"
          />
          <Image
            src={smartphoneLogo}
            alt="Isometric smartphone logo"
            priority
            className="w-32 sm:hidden"
          />
        </Link>
      </div>
      <Nav />
    </header>
  );
};
