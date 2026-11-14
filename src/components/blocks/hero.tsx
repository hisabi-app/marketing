"use client";

import Image from "next/image";

import { Github } from "lucide-react";
import { motion } from "motion/react";

import { EASE } from "@/components/live/primitives";
import { SmsDemo } from "@/components/live/sms-demo";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/container-scroll";

const HEADLINE = "Big income won't make you rich. A system will.";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE, delay },
});

export const Hero = () => {
  const words = HEADLINE.split(" ");

  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="container grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16">
        <div>
          <motion.p {...rise(0)} className="text-muted-foreground text-sm font-medium">
            Open source · Self-hosted · Free
          </motion.p>
          <h1 className="text-foreground mt-3 max-w-160 text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
            {words.map((word, i) => (
              <motion.span key={i} {...rise(0.08 + i * 0.045)} className="inline-block whitespace-pre">
                {word}
                {i < words.length - 1 ? " " : ""}
              </motion.span>
            ))}
          </h1>

          <motion.p {...rise(0.55)} className="text-muted-foreground mt-5 max-w-xl text-lg leading-snug md:text-xl">
            Paste a bank SMS and Hisabi does the rest: it reads it, files it, and shows you what needs you, how the month is going, and where it all went.
          </motion.p>

          <motion.div {...rise(0.7)} className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" asChild>
              <a href="/#get-notified">Get notified</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://hisabi.on-forge.com/" target="_blank" rel="noopener noreferrer">
                Try the demo
              </a>
            </Button>
            <a
              href="https://github.com/hisabi-app/hisabi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground ml-1 inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            >
              <Github className="size-4" />
              Star on GitHub
            </a>
          </motion.div>
        </div>

        <motion.div {...rise(0.35)} className="flex justify-center lg:justify-end">
          <SmsDemo />
        </motion.div>
      </div>

      <div className="mt-20 md:mt-24 lg:container lg:mt-32">
        <ContainerScroll>
          <div className="relative mx-4 md:mx-0">
            <div className="relative w-full overflow-hidden rounded-[22px] shadow-xl" style={{ aspectRatio: "2880 / 1800" }}>
              <Image src="/screens/home.webp" alt="The Hisabi home: what needs you, spending this month against last month, insights, budgets and recent transactions" fill priority className="object-cover" />
            </div>
            <div
              className="border-foreground absolute -right-2 -bottom-10 hidden w-[22%] overflow-hidden rounded-[38px] border-[7px] shadow-2xl md:block"
              style={{ aspectRatio: "1170 / 2532" }}
            >
              <Image src="/screens/home-phone.webp" alt="The Hisabi home on a phone, with the bottom dock" fill className="object-cover object-top" />
            </div>
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
};
