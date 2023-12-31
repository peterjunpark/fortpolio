import Link from "next/link";
import { navLinks, contactLinks, siteInfo } from "@/site-config";

export function Footer() {
  return (
    <footer className="flex flex-col">
      <div className="flex flex-col-reverse pt-12 text-xs text-subtle sm:flex-row sm:justify-between">
        <span className="hidden divide-x divide-dashed text-center sm:block">
          {contactLinks.map((link) => (
            <Link
              href={link.href}
              target="_blank"
              key={link.href}
              className="px-3 decoration-rose hover:underline sm:first:pl-0 dark:decoration-love"
            >
              {link.desc}
            </Link>
          ))}
        </span>
        <nav className="divide-x divide-dashed text-center">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className="px-3 decoration-rose hover:underline sm:last:pr-0 dark:decoration-love"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      <span className="py-3 text-center text-xs">
        {siteInfo.year} ©{" "}
        <Link
          href={siteInfo.repo}
          target="_blank"
          className="pointer-events-none decoration-rose hover:underline sm:pointer-events-auto sm:hover:underline dark:decoration-love"
        >
          {siteInfo.githubUsername}
        </Link>
      </span>
    </footer>
  );
}
