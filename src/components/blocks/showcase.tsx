import Image from "next/image";

import { Github } from "lucide-react";

import { BudgetsDemo } from "@/components/live/budgets-demo";
import { InsightsDemo } from "@/components/live/insights-demo";
import { KioskDemo } from "@/components/live/kiosk-demo";
import { MonthDemo } from "@/components/live/month-demo";
import { NeedsYouDemo } from "@/components/live/needs-you-demo";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Story {
  eyebrow: string;
  title: string;
  body: string;
  // A short nudge to try the live card
  hint?: string;
  demo: React.ReactNode;
  // The demo takes the full width under the text
  wide?: boolean;
}

const stories: Story[] = [
  {
    eyebrow: "Home",
    title: "What needs you comes first",
    body: "New brands to sort, budgets over or ahead of pace, messages it couldn't read. Finish one and it checks itself off.",
    hint: "Try it: tap Assign or Review.",
    demo: <NeedsYouDemo />,
  },
  {
    eyebrow: "This month",
    title: "See how the month is going",
    body: "What you've spent so far against the same point last month, and a few plain sentences about where it went.",
    wide: true,
    demo: (
      <div className="grid items-start gap-4 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        <MonthDemo />
        <InsightsDemo />
      </div>
    ),
  },
  {
    eyebrow: "Budgets",
    title: "Budgets you can read at a glance",
    body: "Each budget is a ring in its category's color. Over or ahead of pace is written out, so you never have to decode a chart.",
    demo: <BudgetsDemo />,
  },
  {
    eyebrow: "Detail",
    title: "Dig deeper when you want to",
    body: "Tap a budget or an insight and the detail slides in beside the home: spending by brand, then every transaction.",
    demo: (
      <Image
        src="/screens/detail.webp"
        alt="The Shopping budget opened beside the home, with spending by brand and its transactions"
        width={2880}
        height={1800}
        className="h-auto w-full rounded-[22px] shadow-lg"
      />
    ),
  },
  {
    eyebrow: "Kiosk",
    title: "A screen for the kitchen wall",
    body: "Put an old tablet on the wall. It shows the month, your budgets and the latest transaction, and goes dark at night.",
    wide: true,
    demo: <KioskDemo />,
  },
];

function StoryRow({ story, index }: { story: Story; index: number }) {
  const flip = index % 2 === 1 && !story.wide;

  return (
    <div
      className={cn(
        "grid items-center gap-8 lg:gap-14",
        story.wide && "lg:grid-cols-1",
        !story.wide && (flip ? "lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]" : "lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]"),
      )}
    >
      <Reveal className={cn("max-w-md", flip && "lg:order-2", story.wide && "max-w-2xl")}>
        <p className="text-muted-foreground text-sm font-medium">{story.eyebrow}</p>
        <h3 className="font-display mt-2 text-3xl leading-tight md:text-4xl">{story.title}</h3>
        <p className="text-muted-foreground mt-3 text-lg leading-snug">{story.body}</p>
        {story.hint && <p className="text-info mt-4 text-sm font-semibold">{story.hint}</p>}
      </Reveal>

      <Reveal delay={90} className={cn(flip && "lg:order-1", story.wide && "mx-auto w-full max-w-4xl")}>
        {story.demo}
      </Reveal>
    </div>
  );
}

export const Showcase = () => {
  return (
    <section id="features" className="pb-24 lg:pb-32">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl leading-tight md:text-5xl">Simple first. Deeper when you want it.</h2>
          <p className="text-muted-foreground mt-4 text-lg leading-snug">
            Hisabi answers three questions on one screen: what needs you, how the month is going, and where the money went. The cards below are live, so go ahead and tap them.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-24 lg:mt-24 lg:gap-32">
          {stories.map((story, index) => (
            <StoryRow key={story.title} story={story} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const Ownership = () => {
  return (
    <section id="features-grid" className="pb-24 lg:pb-32">
      <div className="container">
        <Reveal className="bg-card mx-auto grid max-w-5xl gap-10 rounded-[28px] p-8 shadow-sm md:grid-cols-[1.1fr_1fr] md:p-12">
          <div>
            <p className="text-muted-foreground text-sm font-medium">Privacy</p>
            <h2 className="mt-2 text-3xl leading-tight md:text-4xl">Your money, on your own server</h2>
            <p className="text-muted-foreground mt-3 text-lg leading-snug">
              Hisabi is open source and self-hosted. Your transactions stay on your machine, and you can read every line of code that touches them.
            </p>
            <Button className="mt-6" variant="outline" asChild>
              <a href="https://github.com/hisabi-app/hisabi" target="_blank" rel="noopener noreferrer">
                <Github className="size-4" />
                See it on GitHub
              </a>
            </Button>
          </div>
          <ul className="grid content-center gap-4">
            {[
              ["Works anywhere banks send SMS", "No bank connections or APIs, just the messages you already get."],
              ["Runs with Docker", "Build it, run it, and log in on your own machine."],
              ["MIT licensed", "Free to use, change and share."],
              ["Coming next", "Exporting your data and multiple accounts."],
            ].map(([title, body]) => (
              <li key={title} className="border-border border-t pt-3.5 first:border-t-0 first:pt-0">
                <p className="font-semibold">{title}</p>
                <p className="text-muted-foreground text-sm">{body}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};
