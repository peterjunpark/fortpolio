import Link from "next/link";
import { Tooltip, TooltipTrigger, TooltipContent } from "./tooltip";
import { contactLinks } from "@/site-config";

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
