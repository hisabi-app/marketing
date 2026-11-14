import Link from "next/link";

import { Github } from "lucide-react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export function Footer() {
  const navigation = [
    { name: "Features", href: "/#features" },
    { name: "Story", href: "/story" },
    { name: "Get notified", href: "/#get-notified" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <footer className="flex flex-col items-center gap-14 overflow-hidden pt-24 lg:pt-32">
      <div className="container space-y-3 text-center">
        <h2 className="text-3xl leading-tight md:text-5xl">Ready to see where your money goes?</h2>
        <p className="text-muted-foreground mx-auto max-w-xl text-lg leading-snug text-balance">
          A calm home for your money, on your own server.
        </p>
        <div className="flex flex-col items-center gap-4 pt-4">
          <Button size="lg" asChild>
            <a href="/#get-notified">Get notified</a>
          </Button>
          <a
            href="https://github.com/hisabi-app/hisabi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors"
          >
            <Github className="size-4" />
            <span className="text-sm font-semibold">Star on GitHub</span>
          </a>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-6">
        <Logo />
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <p
        className="text-foreground/[0.05] -mb-[0.22em] w-full text-center text-[24vw] leading-none font-bold tracking-[-0.06em] select-none"
        aria-hidden="true"
      >
        hisabi
      </p>
    </footer>
  );
}
