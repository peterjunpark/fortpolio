import Link from "next/link";
import Image from "next/image";
import gooptop from "@/public/laptop-logo-goop.svg";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-6 font-semibold">
      <p>404: Page not found</p>
      <Link
        href="/"
        className="w-[40%] p-6 text-6xl saturate-[0.45] hover:filter-none"
      >
        <Image src={gooptop} alt="Isometric laptop with goop on it" />
      </Link>
    </div>
  );
}
