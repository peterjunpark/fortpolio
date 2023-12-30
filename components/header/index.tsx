import Image from "next/image";
import Link from "next/link";
import { Nav } from "./nav";
import laptopLogo from "@/public/laptop-logo.svg";
import smartphoneLogo from "@/public/smartphone-logo.svg";

export const Header = () => {
  return (
    <header className="relative flex w-full items-start justify-between sm:pb-7">
      <div className="flex flex-row-reverse">
        <Link href="/" className="peer absolute right-0 top-12 h-fit sm:static">
          <span className="font-sans text-2xl font-semibold sm:text-[1.75rem]">
            Peter Jun Park
          </span>
        </Link>
        <Link
          href="/"
          className="saturate-[.25] hover:filter-none peer-hover:filter-none"
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
