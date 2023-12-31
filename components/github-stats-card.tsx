"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { siteInfo } from "@/site-config";

const username = siteInfo.githubUsername;

type GithubStatsCardProps = {
  variant?: "lang";
} & { variant: "repo"; repo: string };

export function GithubStatsCard({ variant, repo }: GithubStatsCardProps) {
  const { theme } = useTheme();
  const bgColor = theme === "dark" ? "2a283e" : "f4ede8";
  const titleColor = theme === "dark" ? "c4a7e7" : "ea9d34";
  const textColor = theme === "dark" ? "e0def4" : "575279";
  const borderColor = theme === "dark" ? "44415a" : "dfdad9";
  const iconColor = theme === "dark" ? "6e6a86" : "9893a5";

  const imageLoader = ({ src }: { src: string }) => {
    return `https://github-readme-stats.vercel.app/api${src}&bg_color=${bgColor}&title_color=${titleColor}&text_color=${textColor}&border_color=${borderColor}&icon_color=${iconColor}&show_icons=true`;
  };

  let href = `https://github.com/${username}/`;
  let src = `?username=${username}&hide=stars&rank_icon=github&custom_title=${username}`;
  let alt = `GitHub stats for ${username}`;
  let width = 420;

  switch (true) {
    case variant === "lang":
      src = `/top-langs?username=${username}&hide_progress=true&hide=c%2B%2B,cmake&langs_count=8`;
      alt = `GitHub language stats for ${username}`;
      width = 340;
      break;
    case variant === "repo":
      href += repo;
      src = `/pin?username=${username}&repo=${repo}`;
      alt = "GitHub stats for ${username}'s ${repo} repository";
      width = 400;
      break;
  }

  return (
    <Link href={href} className="my-6 flex justify-center">
      <Image
        loader={imageLoader}
        src={src}
        alt={alt}
        width={width}
        height={0}
        placeholder="blur"
        blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNMqQcAAU0A5aSPMbMAAAAASUVORK5CYII="
      />
    </Link>
  );
}
