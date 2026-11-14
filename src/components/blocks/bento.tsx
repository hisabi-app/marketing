import Image from "next/image";
import Link from "next/link";

import { BudgetsDemo } from "@/components/live/budgets-demo";
import { InsightsDemo } from "@/components/live/insights-demo";
import { KioskDemo } from "@/components/live/kiosk-demo";
import { MonthDemo } from "@/components/live/month-demo";
import { NeedsYouDemo } from "@/components/live/needs-you-demo";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// The app's cards sit straight on the tile, without a card of their own
const BARE = "rounded-none bg-transparent p-0 shadow-none";

function Cell({ id, className, delay, children }: { id?: string; className?: string; delay?: number; children: React.ReactNode }) {
  return (
    <Reveal delay={delay} className={cn("bg-card relative min-w-0 overflow-hidden rounded-[28px] p-6", className)}>
      {id && <span id={id} className="absolute -top-24" aria-hidden="true" />}
      {children}
    </Reveal>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-muted-foreground mb-3 text-[13px] font-semibold">{children}</p>;
}

function Title({ title, body, className }: { title: string; body: string; className?: string }) {
  return (
    <div className={className}>
      <h3 className="text-[22px] leading-tight font-bold tracking-[-0.02em]">{title}</h3>
      <p className="text-muted-foreground mt-2 text-[14.5px] leading-normal">{body}</p>
    </div>
  );
}

const COMING = ["Export your data", "Multiple accounts", "API"];

export const Bento = () => {
  return (
    <section id="features" className="py-24 lg:py-28">
      <div className="container">
        <Reveal>
          <h2 className="max-w-[720px] text-[clamp(1.9rem,4.2vw,3.1rem)] leading-[1.05] font-bold tracking-[-0.032em] text-balance">
            Then one screen answers three questions.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-3.5 md:grid-cols-2 lg:grid-cols-12">
          <Cell className="md:col-span-2 lg:col-span-5">
            <Label>What needs you?</Label>
            <NeedsYouDemo className={BARE} />
          </Cell>

          <Cell className="md:col-span-2 lg:col-span-7" delay={60}>
            <Label>How is the month going?</Label>
            <MonthDemo className={BARE} />
          </Cell>

          <Cell className="lg:col-span-4">
            <Label>Where did it go?</Label>
            <BudgetsDemo className={BARE} twoUp />
          </Cell>

          <Cell className="flex flex-col items-center pb-0 md:row-span-2 lg:col-span-4" delay={60}>
            <Title title="In your pocket" body="A dock on your phone, a sidebar on your laptop." className="mb-6 text-center" />
            <div className="border-foreground mt-auto w-full max-w-[250px] overflow-hidden rounded-t-[42px] border-[10px] border-b-0" style={{ aspectRatio: "1170 / 2000" }}>
              <Image src="/screens/home-phone.webp" alt="The Hisabi home on a phone, with the bottom dock" width={1170} height={2532} className="block h-auto w-full" />
            </div>
          </Cell>

          <Cell className="lg:col-span-4" delay={120}>
            <Label>In plain sentences</Label>
            <InsightsDemo className={BARE} />
          </Cell>

          <Cell className="flex flex-col lg:col-span-4">
            <Title title="Runs on your server" body="Your transactions stay with you. No bank login to hand over." />
            <pre className="bg-background text-muted-foreground mt-5 overflow-x-auto rounded-2xl px-4 py-3 font-mono text-[12.5px] leading-[1.75] lg:mt-auto">
              <span className="opacity-50">$</span> make build{"\n"}
              <span className="opacity-50">$</span> make run{"\n"}
              <span className="opacity-50">$</span> make install
            </pre>
          </Cell>

          <Cell className="lg:col-span-4" delay={120}>
            <Title title="Free and open source" body="MIT licensed, and still growing." />
            <ul className="mt-4">
              {COMING.map((item) => (
                <li key={item} className="flex justify-between gap-3 border-t py-2.5 font-medium">
                  {item}
                  <span className="text-muted-foreground text-[12.5px] font-semibold">Coming soon</span>
                </li>
              ))}
            </ul>
          </Cell>

          <Cell className="md:col-span-2 lg:col-span-6">
            <Title title="Detail when you want it" body="Tap a budget and it opens beside the home: spending by brand, then every purchase." />
            <div className="bg-background relative mt-5 overflow-hidden rounded-2xl" style={{ aspectRatio: "16 / 10.5" }}>
              <Image
                src="/screens/detail.webp"
                alt="The Shopping budget opened beside the home, with spending by brand and its transactions"
                width={2880}
                height={1800}
                className="absolute top-0 right-0 h-auto w-[215%] max-w-none"
              />
            </div>
          </Cell>

          <Cell id="kiosk" className="md:col-span-2 lg:col-span-6" delay={60}>
            <Title title="On the kitchen wall" body="Put an old tablet on the wall: the month, your budgets and the latest purchase. Dark from 10pm." />
            <KioskDemo className="mt-5" />
          </Cell>

          <Cell className="grid items-center gap-6 md:col-span-2 lg:col-span-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-10 lg:px-10 lg:py-11">
            <blockquote className="text-[clamp(1.35rem,2.4vw,2rem)] leading-[1.25] font-semibold tracking-[-0.02em] text-balance">
              &ldquo;I was $35,000 in debt after university. I started by copying every SMS from my bank into a spreadsheet. That little system became Hisabi.&rdquo;
            </blockquote>
            <div className="grid justify-items-start gap-4">
              <p className="text-muted-foreground leading-normal">It helped pay off every cent of that debt. You don&apos;t need to be a finance expert, you need a system that works.</p>
              <Button variant="outline" asChild>
                <Link href="/story/">Read the story</Link>
              </Button>
            </div>
          </Cell>
        </div>
      </div>
    </section>
  );
};
