"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { ArrowRight, Fuel, ShoppingCart, UtensilsCrossed } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useInView, useReducedMotion } from "motion/react";

import { Tile, amount } from "./primitives";

import { cn } from "@/lib/utils";

type Field = "Amount" | "Card" | "Shop";

interface Message {
  // The SMS, split into plain text and the parts Hisabi picks out
  parts: [string, Field?][];
  time: string;
  // How it shows up in Hisabi: a known shop under its clean name, a new one as the bank wrote it
  brand: string;
  amount: number;
  category?: { name: string; color: string; Icon: LucideIcon };
}

// Real formats from Hisabi's SMS templates
const MESSAGES: Message[] = [
  {
    parts: [["Purchase of AED "], ["312.40", "Amount"], [" with "], ["Credit Card ending 4321", "Card"], [" at "], ["CARREFOUR CITY CENTRE", "Shop"], [", DUBAI."]],
    time: "09:12",
    brand: "Carrefour",
    amount: 312.4,
    category: { name: "Groceries", color: "var(--cat-green)", Icon: ShoppingCart },
  },
  {
    parts: [["Your Cr.Card "], ["XXX4321", "Card"], [" was used for AED"], ["86.50", "Amount"], [" on 14/11/2026 13:05 at "], ["TALABAT", "Shop"], [",DUBAI. Avl limit AED 18,153.50"]],
    time: "13:05",
    brand: "Talabat",
    amount: 86.5,
    category: { name: "Dining out", color: "var(--cat-orange)", Icon: UtensilsCrossed },
  },
  {
    parts: [["Payment of AED "], ["210.00", "Amount"], [" to "], ["EPPCO", "Shop"], [" with "], ["Credit Card ending 4321", "Card"], ["."]],
    time: "17:40",
    brand: "Eppco",
    amount: 210,
    category: { name: "Fuel", color: "var(--cat-blue)", Icon: Fuel },
  },
  {
    parts: [["Purchase of AED "], ["64.00", "Amount"], [" with "], ["Credit Card ending 4321", "Card"], [" at "], ["BASKIN ROBBINS JBR", "Shop"], [", DUBAI."]],
    time: "21:18",
    brand: "BASKIN ROBBINS JBR",
    amount: 64,
  },
];

const MARKS: Record<Field, string> = {
  Amount: "color-mix(in oklch, var(--cat-green) 24%, transparent)",
  Card: "color-mix(in oklch, var(--cat-purple) 18%, transparent)",
  Shop: "color-mix(in oklch, var(--cat-orange) 24%, transparent)",
};

const READ_AT = 650;
const STEP = 1050;

type Phase = "idle" | "playing" | "done";

// The hero: a day of bank messages, read one by one and filed as transactions
export function InboxDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("idle");
  const [read, setRead] = useState(0);
  const [reading, setReading] = useState<number | null>(null);
  const timers = useRef<number[]>([]);

  const play = useCallback(() => {
    timers.current.forEach(window.clearTimeout);
    timers.current = [];

    if (reduced) {
      setPhase("done");
      return;
    }

    setPhase("playing");
    setRead(0);
    setReading(null);

    const later = (fn: () => void, ms: number) => timers.current.push(window.setTimeout(fn, ms));
    MESSAGES.forEach((_, i) => {
      later(() => setReading(i), 250 + i * STEP);
      later(() => {
        setReading(null);
        setRead(i + 1);
      }, 250 + READ_AT + i * STEP);
    });
    later(() => setPhase("done"), 250 + READ_AT + MESSAGES.length * STEP);
  }, [reduced]);

  useEffect(() => {
    if (inView) play();
  }, [inView, play]);

  useEffect(() => () => timers.current.forEach(window.clearTimeout), []);

  const filed = phase === "done" ? MESSAGES.length : read;
  const spent = MESSAGES.slice(0, filed).reduce((sum, message) => sum + message.amount, 0);

  return (
    <div ref={ref} data-phase={phase} className="inbox bg-card grid gap-6 rounded-[30px] p-5 shadow-sm md:p-7 lg:grid-cols-[minmax(0,1fr)_48px_minmax(0,1fr)] lg:gap-0">
      <div>
        <p className="mb-3.5 flex items-baseline gap-2 font-bold">
          Messages <span className="text-muted-foreground text-[13.5px] font-medium">from your bank, today</span>
        </p>
        <div className="grid gap-2.5">
          {MESSAGES.map((message, i) => (
            <div
              key={message.time}
              className={cn(
                "inbox-bubble relative overflow-hidden rounded-[20px] rounded-bl-md bg-[oklch(0.93_0.003_286)] px-4 py-2.5 text-[15px] leading-[1.45]",
                i < filed && "is-read",
                reading === i && "is-reading",
              )}
            >
              <span className="text-muted-foreground mb-0.5 flex justify-between text-xs font-semibold">
                <span>Your bank</span>
                <span className="font-rounded">{message.time}</span>
              </span>
              {message.parts.map(([text, field], j) =>
                field ? (
                  <mark key={j} className="inbox-mark text-inherit" style={{ "--mark": MARKS[field] } as React.CSSProperties}>
                    {text}
                  </mark>
                ) : (
                  <span key={j}>{text}</span>
                ),
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="text-muted-foreground/60 hidden place-items-center lg:grid" aria-hidden="true">
        <ArrowRight className="size-6" />
      </div>

      <div>
        <p className="mb-3.5 flex items-baseline gap-2 font-bold">
          Hisabi <span className="text-muted-foreground text-[13.5px] font-medium">Transactions</span>
        </p>
        <div className="bg-background rounded-[22px] px-5 pt-3.5 pb-1.5">
          <div className="flex items-baseline justify-between border-b pb-2.5">
            <h3 className="font-bold">Today</h3>
            <span className="inbox-total text-muted-foreground font-rounded text-[13px] tabular-nums">{amount(spent, 2)} spent</span>
          </div>
          {MESSAGES.map((message, i) => (
            <div key={message.time} className={cn("inbox-row grid grid-cols-[36px_minmax(0,1fr)_auto] items-center gap-x-3 py-2.5", i > 0 && "border-t", i < filed && "is-in")}>
              <Tile color={message.category?.color} Icon={message.category?.Icon} />
              <div className="min-w-0">
                <p className="truncate font-semibold">{message.brand}</p>
                {message.category ? (
                  <p className="text-muted-foreground text-[12.5px]">{message.category.name}</p>
                ) : (
                  <p className="text-info text-[12.5px] font-semibold">Choose a category</p>
                )}
              </div>
              <span className="font-rounded text-[14.5px] font-semibold tabular-nums">{amount(message.amount, 2)}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="text-muted-foreground flex flex-wrap gap-3 text-[12.5px]">
            {(Object.keys(MARKS) as Field[]).map((field) => (
              <span key={field} className="inline-flex items-center gap-1.5">
                <i className="inline-block size-3 rounded-[4px]" style={{ background: MARKS[field] }} />
                {field}
              </span>
            ))}
          </div>
          <button type="button" onClick={play} className="text-info text-[13.5px] font-semibold hover:underline">
            Play again
          </button>
        </div>
        <p className="text-muted-foreground mt-3 max-w-sm text-[13.5px] leading-snug">
          A shop it hasn&apos;t seen before waits under Needs you. Choose its category once and it remembers.
        </p>
      </div>
    </div>
  );
}
