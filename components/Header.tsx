import { NAV_LINKS } from "@/constants";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="sticky top-0 h-16 flex gap-20 items-center bg-app-primary/80 backdrop-blur-lg z-50">
      <Link href="/" className="font-black text-xl">
        Dhyaanam.
      </Link>
      <div className="hidden md:flex gap-8 items-center">
        {NAV_LINKS.map((link, idx) => (
          <Link
            href={link.href}
            className="cursor-pointer hover:underline decoration-app-accent underline-offset-2 decoration-2 font-medium"
            key={idx}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
