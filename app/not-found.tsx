import Link from "next/link";
import { PiSmileyNervous as OhShitIcon } from "react-icons/pi";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-6 font-semibold">
      <p>404: Page not found</p>
      <Link href="/" className="p-6 text-6xl">
        <OhShitIcon />
      </Link>
    </div>
  );
}
