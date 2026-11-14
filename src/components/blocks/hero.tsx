"use client";

import { Github } from "lucide-react";
import { motion } from "motion/react";

import { InboxDemo } from "@/components/live/inbox-demo";
import { EASE } from "@/components/live/primitives";
import { Button } from "@/components/ui/button";

const HEADLINE = "Your bank texts you every purchase. Hisabi reads them for you.";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE, delay },
});

export const Hero = () => {
  const words = HEADLINE.split(" ");

  return (
    <section className="bg-card pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="container">
        <div className="max-w-[860px]">
          <motion.p {...rise(0)} className="text-muted-foreground text-sm font-semibold">
            Open source · Self-hosted · Free
          </motion.p>
          <h1 className="mt-3.5 text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.02] font-bold tracking-[-0.038em] text-balance">
            {words.map((word, i) => (
              <motion.span key={i} {...rise(0.08 + i * 0.04)} className="inline-block whitespace-pre">
                {word}
                {i < words.length - 1 ? " " : ""}
              </motion.span>
            ))}
          </h1>
          <motion.p {...rise(0.5)} className="text-muted-foreground mt-5 max-w-[620px] text-lg leading-snug md:text-xl">
            Paste the messages you already get. Hisabi picks out the amount, the card and the shop, files each one, and shows you what needs you.
          </motion.p>
          <motion.div {...rise(0.62)} className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" asChild>
              <a href="https://hisabi.on-forge.com/" target="_blank" rel="noopener noreferrer">
                Try the demo
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/#get-notified">Get notified</a>
            </Button>
            <a
              href="https://github.com/hisabi-app/hisabi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground ml-1 inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            >
              <Github className="size-4" aria-hidden="true" />
              Star on GitHub
            </a>
          </motion.div>
        </div>

        <motion.div {...rise(0.4)} className="mt-12 lg:mt-14">
          <InboxDemo />
        </motion.div>
      </div>
    </section>
  );
};
