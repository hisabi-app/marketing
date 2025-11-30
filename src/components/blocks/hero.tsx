"use client";

import Image from "next/image";

import {
  LayoutDashboard,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/container-scroll";

const features = [
  {
    title: "Smart SMS Detection",
    description: "Instantly turn bank SMS alerts into tracked expenses. No manual entry needed.",
    icon: MessageSquareText,
  },
  {
    title: "Data Encryption",
    description: "Your financial data is encrypted and secure. Privacy by design, always.",
    icon: ShieldCheck,
  },
  {
    title: "Beautiful Dashboards",
    description: "Visualize your financial life with stunning, interactive charts and graphs.",
    icon: LayoutDashboard,
  },
  {
    title: "HisabiAI Insights",
    description: "Unlock deep insights into your spending habits with our AI-powered assistant.",
    icon: Sparkles,
  },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl">
            Big income won't make you rich. A system will.
          </h1>

          <p className="text-muted-foreground text-1xl mt-5 md:text-3xl">
            Hisabi is your personal finance system — track, understand, and grow your wealth effortlessly.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button asChild>
              <a href="/#get-notified">
                Get Notified
              </a>
            </Button>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 border-0 bg-linear-to-r to-transparent"
              asChild
            >
              <a
                href="https://hisabi.on-forge.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="max-w-56 truncate text-start md:max-w-none"
              >
                View Demo
              </a>
            </Button>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-text text-foreground font-semibold">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 md:mt-20 lg:container lg:mt-24">
        <ContainerScroll>
          <div className="relative w-full" style={{ aspectRatio: '3140 / 1802' }}>
            <Image
              src="/hero.webp"
              alt="hero"
              fill
              className="rounded-2xl object-cover shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
            />
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
};
