"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Features", href: "/#features" },
  { label: "Kitchen display", href: "/#kiosk" },
  { label: "Story", href: "/story/" },
  { label: "GitHub", href: "https://github.com/hisabi-app/hisabi", external: true },
];

// Pages are exported with a trailing slash; compare paths without it
const samePath = (a: string | null, b: string) => (a ?? "").replace(/\/$/, "") === b.replace(/\/$/, "");

function NavLink({ link, className, onClick }: { link: (typeof LINKS)[number]; className?: string; onClick?: () => void }) {
  const pathname = usePathname();

  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.href} className={cn(className, samePath(pathname, link.href) && "text-foreground")} onClick={onClick}>
      {link.label}
    </Link>
  );
}

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="container flex h-[76px] items-center gap-6">
        <Link href="/" className="shrink-0" aria-label="Hisabi home">
          <Logo className="h-8" />
        </Link>

        <nav className="ml-auto hidden items-center gap-6 lg:flex" aria-label="Main">
          {LINKS.map((link) => (
            <NavLink key={link.label} link={link} className="text-muted-foreground hover:text-foreground text-[14.5px] font-medium transition-colors" />
          ))}
        </nav>

        <Button asChild className="ml-auto h-10 px-5 lg:ml-0">
          <a href="https://github.com/hisabi-app/hisabi#%EF%B8%8F-installation" target="_blank" rel="noopener noreferrer">
            Download
          </a>
        </Button>

        <button
          type="button"
          className="text-muted-foreground relative -mr-1 flex size-9 lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
          <span className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
            <span aria-hidden="true" className={cn("absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out", isMenuOpen ? "rotate-45" : "-translate-y-1.5")} />
            <span aria-hidden="true" className={cn("absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out", isMenuOpen && "opacity-0")} />
            <span aria-hidden="true" className={cn("absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out", isMenuOpen ? "-rotate-45" : "translate-y-1.5")} />
          </span>
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Main"
        className={cn(
          "bg-card absolute inset-x-4 top-[72px] flex flex-col divide-y rounded-3xl px-6 py-2 shadow-md transition-all duration-300 ease-out-quint lg:hidden",
          isMenuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0",
        )}
      >
        {LINKS.map((link) => (
          <NavLink key={link.label} link={link} className="py-4 text-base font-medium" onClick={() => setIsMenuOpen(false)} />
        ))}
      </nav>
    </header>
  );
};
