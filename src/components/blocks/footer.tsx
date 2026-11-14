import Link from "next/link";

import { Logo } from "@/components/logo";

const LINKS = [
  { name: "Features", href: "/#features" },
  { name: "Story", href: "/story/" },
  { name: "Get notified", href: "/#get-notified" },
  { name: "Privacy", href: "/privacy/" },
];

export function Footer() {
  return (
    <footer className="container flex flex-wrap items-center gap-x-6 gap-y-3 pt-16 pb-10 text-[13.5px]">
      <Link href="/" className="mr-auto" aria-label="Hisabi home">
        <Logo className="h-7" />
      </Link>
      <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-2">
        {LINKS.map((link) => (
          <Link key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground font-medium transition-colors">
            {link.name}
          </Link>
        ))}
        <a
          href="https://github.com/hisabi-app/hisabi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground font-medium transition-colors"
        >
          GitHub
        </a>
        <span className="text-muted-foreground">MIT licensed</span>
      </nav>
    </footer>
  );
}
