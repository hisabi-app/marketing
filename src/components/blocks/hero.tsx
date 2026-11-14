"use client";

import Image from "next/image";

import { Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/container-scroll";

const points = [
  {
    title: "Paste an SMS, and you're done",
    description: "Hisabi reads the amount, the card and the shop from your bank's message.",
  },
  {
    title: "What needs you comes first",
    description: "New brands to sort and budgets running ahead sit at the top of the home.",
  },
  {
    title: "Budgets you can read at a glance",
    description: "Each one is a ring, with what's left and whether you're ahead of pace.",
  },
  {
    title: "Yours, on your own server",
    description: "Open source and self-hosted. Your transactions never leave your machine.",
  },
];

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-44 lg:pb-28">
      <div className="container flex flex-col justify-between gap-12 lg:flex-row lg:items-end lg:gap-20">
        <div className="flex-[1.2]">
          <p className="text-muted-foreground text-sm font-medium">Open source · Self-hosted · Free</p>
          <h1 className="text-foreground mt-3 max-w-160 text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
            Big income won&apos;t make you rich. A system will.
          </h1>

          <p className="text-muted-foreground mt-5 max-w-xl text-lg leading-snug md:text-xl">
            Hisabi turns your bank SMS into a calm, clear picture of your money: what needs you, how the month is going, and where it all went.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
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
          </div>
        </div>

        <ul className="grid flex-1 gap-5">
          {points.map((point) => (
            <li key={point.title} className="border-border border-t pt-4">
              <h2 className="text-foreground font-text text-[15px] font-semibold tracking-normal">{point.title}</h2>
              <p className="text-muted-foreground mt-0.5 text-sm">{point.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14 md:mt-20 lg:container lg:mt-24">
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
