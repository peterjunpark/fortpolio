import Link from "next/link";
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";
import { contactLinks } from "@/site.config";

export function ContactArray() {
  return (
    <span className="flex justify-center gap-8 pb-3 pt-8 text-[1.7rem]">
      {contactLinks.map((link) => (
        <Tooltip key={link.desc}>
          <TooltipTrigger asChild>
            <Link
              href={link.href}
              target="_blank"
              className="-my-5 hover:text-rose dark:hover:text-love"
            >
              {link.icon}
            </Link>
          </TooltipTrigger>
          <TooltipContent className="bg-highlight font-sans text-sm">
            {link.href.startsWith("mailto:") ? (
              <span>
                Email{" "}
                <span className="font-mono">
                  {link.href.replace("mailto:", "")}
                </span>
              </span>
            ) : (
              link.desc
            )}
          </TooltipContent>
        </Tooltip>
      ))}
    </span>
  );
}
