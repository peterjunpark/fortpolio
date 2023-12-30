import Link from "next/link";
import {
  navLinks,
  footerName,
  footerYear,
  repoLink,
} from "@/content/site-config";

export function Footer() {
  return (
    <footer className="mt-auto flex flex-col-reverse gap-2 py-9 text-sm text-subtle sm:flex-row sm:justify-between">
      <div className="text-center">
        {footerYear}{" "}
        <Link
          href={repoLink}
          target="_blank"
          className="pointer-events-none sm:pointer-events-auto sm:hover:underline"
        >
          {footerName}
        </Link>
      </div>
      <div className="divide-x divide-dashed text-center text-[0.81rem] text-subtle">
        {navLinks.map((link) => (
          <Link
            href={link.href}
            target="_blank"
            key={link.href}
            className="px-3 last:pr-0 hover:underline"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </footer>
  );
}
