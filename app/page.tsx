import Link from "next/link";

import { Section } from "@/components/section";
import {
  IoLogoGithub as GitHubIcon,
  IoLogoLinkedin as LinkedInIcon,
  IoMailOpen as EmailIcon,
} from "react-icons/io5";

export default function Home() {
  const contactLinks = [
    { icon: <GitHubIcon />, href: "https://github.com/peterjunpark" },
    { icon: <LinkedInIcon />, href: "https://linkedin.com/in/peterjunpark" },
    { icon: <EmailIcon />, href: "mailto:park@hey.com" },
  ];
  return (
    <main className="flex flex-col">
      <Section heading="Hello world!">
        <p>
          I&apos;m a full stack developer with a background in technical
          documentation. My commitment to clear communication and
          problem-solving complements my passion for creating robust web
          solutions.
        </p>
        <div className="flex items-center gap-4 pt-6 font-semibold">
          <span>Find me on</span>
          <span className="flex gap-5 text-[1.7rem]">
            {contactLinks.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className="-my-5 hover:text-rose dark:hover:text-love"
              >
                {link.icon}
              </Link>
            ))}
          </span>
        </div>
      </Section>
      <Section heading="Recent posts">
        <p>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
          Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
          officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
          sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
          consectetur et est culpa et culpa duis.
        </p>
      </Section>
    </main>
  );
}
