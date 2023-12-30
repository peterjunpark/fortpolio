import Link from "next/link";
import { contactLinks, siteInfo } from "@/site-config";

export function Footer() {
  return (
    <footer className="mt-auto flex flex-col-reverse gap-2 pb-6 pt-12 text-sm text-subtle sm:flex-row sm:justify-between">
      <div className="text-center">
        {siteInfo.year} ©{" "}
        <Link
          href={siteInfo.year}
          target="_blank"
          className="pointer-events-none sm:pointer-events-auto sm:hover:underline"
        >
          {siteInfo.name}
        </Link>
      </div>
      <nav className="divide-x divide-dashed text-center font-medium text-subtle">
        {contactLinks.map((link) => (
          <Link
            href={link.href}
            target="_blank"
            key={link.href}
            className="px-3 hover:underline sm:last:pr-0"
          >
            {link.desc}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
