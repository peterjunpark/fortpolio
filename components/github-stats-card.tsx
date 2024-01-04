"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { siteInfo, githubStatsCardColors as colors } from "@/site.config";

type GithubStatsCardProps =
  | { variant?: "profile" | "lang"; repo?: string }
  | { variant: "repo"; repo: string };

export function GithubStatsCard({ variant, repo }: GithubStatsCardProps) {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const bgColor = theme === "dark" ? colors.dark.bg : colors.light.bg;
  const titleColor = theme === "dark" ? colors.dark.title : colors.light.title;
  const textColor = theme === "dark" ? colors.dark.text : colors.light.text;
  const iconColor = theme === "dark" ? colors.dark.icon : colors.light.icon;

  const imageLoader = ({ src }: { src: string }) => {
    return `https://github-readme-stats.vercel.app/api${src}&bg_color=${bgColor}&title_color=${titleColor}&text_color=${textColor}&icon_color=${iconColor}&show_icons=true&hide_border=true`;
  };

  let username = siteInfo.githubUsername as string;
  let href = `https://github.com`;
  let src = `?username=${username}&hide=stars&rank_icon=github&custom_title=${username}`;
  let alt = `GitHub stats for ${username}`;
  let widthClass = "w-full";

  switch (true) {
    case variant === "repo":
      if (repo && repo.includes("/")) {
        const slashIdx = repo.indexOf("/");
        username = repo.substring(0, slashIdx);
        repo = repo.substring(slashIdx + 1);
      }
      href += `/${username}/${repo}`;
      src = `/pin?username=${username}&repo=${repo}`;
      alt = `GitHub stats for ${username}'s ${repo} repository`;
      widthClass = "w-[26rem]";
      break;
    case variant === "lang":
      src = `/top-langs?username=${username}&hide_progress=true&hide=c%2B%2B,cmake,handlebars&langs_count=8`;
      alt = `GitHub language stats for ${username}`;
      widthClass = "w-[21rem]";
    default:
      href += `/${username}`;
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex w-full justify-center py-5">
      <Link href={href}>
        <Image
          loader={imageLoader}
          src={src}
          alt={alt}
          width={0}
          height={0}
          className={cn(
            "rounded-md outline-1 outline-rose hover:outline dark:outline-love",
            widthClass,
          )}
        />
      </Link>
    </div>
  );
}
