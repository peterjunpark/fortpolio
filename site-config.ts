import { createElement } from "react";
import {
  IoLogoGithub as GitHubIcon,
  IoLogoLinkedin as LinkedInIcon,
  IoMailOpen as EmailIcon,
} from "react-icons/io5";
import { PiNotebookFill as CVIcon } from "react-icons/pi";

// prettier-ignore
export const contactLinks = [
  { desc: "GitHub", href: "https://github.com/peterjunpark", icon: createElement(GitHubIcon) },
  { desc: "LinkedIn", href: "https://linkedin.com/in/peterjunpark", icon: createElement(LinkedInIcon) },
  { desc: "Email", href: "mailto:park@hey.com", icon: createElement(EmailIcon) },
  { desc: "CV", href: "/Peter_Park_CV.pdf", icon: createElement(CVIcon) },
] as const;

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Bio", href: "/bio" },
  { name: "Projects", href: "/projects" },
  // { name: "Posts", href: "/posts" },
] as const;

export const siteInfo = {
  repo: "https://github.com/peterjunpark/fortpolio",
  name: "peterjunpark",
  year: "2024",
} as const;
