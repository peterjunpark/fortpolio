import Link from "next/link";
import { Tooltip, TooltipTrigger, TooltipContent } from "./tooltip";
import { githubLink, linkedinLink, email, resumePath } from "@/site-config";
import {
  IoLogoGithub as GitHubIcon,
  IoLogoLinkedin as LinkedInIcon,
  IoMailOpen as EmailIcon,
} from "react-icons/io5";
import { PiNotebookFill as PaperIcon } from "react-icons/pi";

type ContactArrayProps = {
  hideGithub?: boolean;
  hideLinkedin?: boolean;
  hideEmail?: boolean;
  hideResume?: boolean;
};

export function ContactArray({
  hideGithub,
  hideLinkedin,
  hideEmail,
  hideResume,
}: ContactArrayProps) {
  // prettier-ignore
  const contactLinks: ContactLinkProps[] = [
    { icon: <GitHubIcon />, href: githubLink, desc: "GitHub" },
    { icon: <LinkedInIcon />, href: linkedinLink, desc: "LinkedIn" },
    { icon: <EmailIcon />, href: "mailto:" + email,
      desc: <span>Email <span className="font-mono">park@hey.com</span></span> },
    { icon: <PaperIcon />, href: resumePath, desc: "Résumé" },
  ];

  return (
    <span className="flex justify-center gap-8 pt-8 text-[1.7rem]">
      {!hideGithub && <ContactLink {...contactLinks[0]} />}
      {!hideLinkedin && <ContactLink {...contactLinks[1]} />}
      {!hideEmail && <ContactLink {...contactLinks[2]} />}
      {!hideResume && <ContactLink {...contactLinks[3]} />}
    </span>
  );
}

type ContactLinkProps = {
  href: string;
  icon: JSX.Element;
  desc: string | JSX.Element;
};

function ContactLink({ href, icon, desc }: ContactLinkProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          target="_blank"
          className="-my-5 hover:text-rose dark:hover:text-love"
        >
          {icon}
        </Link>
      </TooltipTrigger>
      <TooltipContent className="bg-highlight font-sans text-sm">
        {desc}
      </TooltipContent>
    </Tooltip>
  );
}
