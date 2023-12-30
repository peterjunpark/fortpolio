import Link from "next/link";
import { githubLink, linkedinLink, email } from "@/content/site-config";
import {
  IoLogoGithub as GitHubIcon,
  IoLogoLinkedin as LinkedInIcon,
  IoMailOpen as EmailIcon,
} from "react-icons/io5";

export function ContactArray() {
  const contactLinks = [
    { icon: <GitHubIcon />, href: githubLink },
    { icon: <LinkedInIcon />, href: linkedinLink },
    { icon: <EmailIcon />, href: "mailto:" + email },
  ];
  return (
    <div className="flex items-center gap-4 py-6 font-semibold">
      <span>More of me:</span>
      <span className="flex gap-5 text-[1.7rem]">
        {contactLinks.map((link) => (
          <Link
            href={link.href}
            target="_blank"
            key={link.href}
            className="-my-5 hover:text-rose dark:hover:text-love"
          >
            {link.icon}
          </Link>
        ))}
      </span>
    </div>
  );
}
