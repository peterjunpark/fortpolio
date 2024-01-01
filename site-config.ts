import { createElement } from "react";
import {
  IoLogoGithub as GitHubIcon,
  IoLogoLinkedin as LinkedInIcon,
  IoMailOpen as EmailIcon,
} from "react-icons/io5";
import { PiNotebookFill as CVIcon } from "react-icons/pi";

export const siteInfo = {
  githubUsername: "peterjunpark",
  linkedinUsername: "peterjunpark",
  email: "park@hey.com",
  cvPath: "/Peter_Park_CV.pdf",
  repo: "https://github.com/peterjunpark/fortpolio",
  year: "2024",
} as const;

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Bio", href: "/bio" },
  { name: "Projects", href: "/projects" },
  // { name: "Posts", href: "/posts" },
] as const;

// prettier-ignore
export const contactLinks = [
  { desc: "GitHub", href: "https://github.com/" + siteInfo.githubUsername, icon: createElement(GitHubIcon) },
  { desc: "LinkedIn", href: "https://linkedin.com/in/" + siteInfo.linkedinUsername, icon: createElement(LinkedInIcon) },
  { desc: "Email", href: "mailto:" + siteInfo.email, icon: createElement(EmailIcon) },
  { desc: "CV", href: siteInfo.cvPath, icon: createElement(CVIcon) },
] as const;

export const githubStatsCardColors = {
  light: {
    bg: "f4ede8",
    title: "ea9d34",
    text: "575279",
    icon: "9893a5",
  },
  dark: {
    bg: "2a283e",
    title: "c4a7e7",
    text: "e0def4",
    icon: "6e6a86",
  },
} as const;
