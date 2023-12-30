import Link from "next/link";
import { githubLink, linkedinLink, email } from "@/site-config";
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
    <span className="flex justify-center gap-8 pt-8 text-[1.7rem]">
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
  );
}
