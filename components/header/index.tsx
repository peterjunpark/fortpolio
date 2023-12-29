import Image from "next/image";
import Link from "next/link";
import { Nav } from "./nav";
import logo from "@/public/logo.svg";

export const Header = () => {
  return (
    <header className="relative flex w-full items-start justify-between">
      <div className="flex flex-row-reverse">
        <Link href="/" className="peer h-fit">
          <h1 className="font-sans text-xl font-semibold sm:text-[1.75rem]">
            Peter Jun Park
          </h1>
        </Link>
        <Link
          href="/"
          className="saturate-[.25] hover:filter-none peer-hover:filter-none"
        >
          <Image
            src={logo}
            alt="Peter Jun Park's personal logo"
            priority
            className="w-14 sm:w-32"
          />
        </Link>
      </div>
      <Nav />
    </header>
  );
};
