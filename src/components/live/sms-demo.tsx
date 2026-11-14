"use client";

import { useEffect, useState } from "react";

import { Check, Fuel, ShoppingCart, Sparkles, UtensilsCrossed } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { CountUp, EASE, Tile } from "./primitives";

import { cn } from "@/lib/utils";



interface Example {
  // The SMS, split into plain text and the parts Hisabi picks out
  parts: [string, string?][];
  brand: string;
  amount: number;
  category: { name: string; color: string; Icon: LucideIcon };
}

// Real formats from Hisabi's SMS templates
const EXAMPLES: Example[] = [
  {
    parts: [["Purchase of AED "], ["312.40", "Amount"], [" with "], ["Credit Card ending 4321", "Card"], [" at "], ["CARREFOUR CITY CENTRE", "Shop"], [", DUBAI."]],
    brand: "CARREFOUR CITY CENTRE",
    amount: 312.4,
    category: { name: "Groceries", color: "var(--cat-green)", Icon: ShoppingCart },
  },
  {
    parts: [["Your Cr.Card "], ["XXX4321", "Card"], [" was used for AED"], ["86.50", "Amount"], [" on "], ["14/11/2026", "Date"], [" 18:42 at "], ["TALABAT", "Shop"], [",DUBAI. Avl limit AED 18,153.50"]],
    brand: "TALABAT",
    amount: 86.5,
    category: { name: "Dining out", color: "var(--cat-orange)", Icon: UtensilsCrossed },
  },
  {
    parts: [["Payment of AED "], ["210.00", "Amount"], [" to "], ["EPPCO", "Shop"], [" with "], ["Credit Card ending 4321", "Card"], ["."]],
    brand: "EPPCO",
    amount: 210,
    category: { name: "Fuel", color: "var(--cat-blue)", Icon: Fuel },
  },
];

type Phase = "arrive" | "reading" | "found" | "filed";

// Hero demo: an SMS arrives, Hisabi reads it, and it lands in the right category
export function SmsDemo() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("arrive");
  const [lit, setLit] = useState(0);
  const [paused, setPaused] = useState(false);

  const example = EXAMPLES[index];
  const parts = example.parts.filter(([, label]) => label).length;

  const show = (next: number) => {
    setIndex(next);
    setLit(0);
    setPhase("arrive");
  };

  // The timeline for one message: arrive, light up each part, find, file, then the next one
  useEffect(() => {
    if (reduced) {
      setPhase("filed");
      setLit(parts);
      return;
    }

    let timer: number;
    if (phase === "arrive") timer = window.setTimeout(() => setPhase("reading"), 900);
    else if (phase === "reading" && lit < parts) timer = window.setTimeout(() => setLit((count) => count + 1), lit === 0 ? 500 : 380);
    else if (phase === "reading") timer = window.setTimeout(() => setPhase("found"), 450);
    else if (phase === "found") timer = window.setTimeout(() => setPhase("filed"), 1300);
    else if (!paused) timer = window.setTimeout(() => show((index + 1) % EXAMPLES.length), 2600);

    return () => window.clearTimeout(timer!);
  }, [phase, lit, parts, paused, index, reduced]);

  let partIndex = 0;

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className="w-full max-w-[460px]">
      <div className="glow-ring rounded-[30px]">
        <div className="bg-card rounded-[28.5px] p-5 sm:p-6">
          <div className="flex items-center gap-2.5">
            <span className="bg-secondary text-muted-foreground grid size-8 place-items-center rounded-full text-xs font-bold">B</span>
            <p className="text-sm font-semibold">
              Your bank <span className="text-muted-foreground font-normal">· now</span>
            </p>
          </div>

          <div className="relative mt-3 min-h-[150px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="bg-secondary rounded-[20px] rounded-tl-md px-4 pt-5 pb-3 text-[14px] leading-[2.65]"
              >
                {example.parts.map(([text, label], i) => {
                  if (!label) return <span key={i}>{text}</span>;

                  const isLit = partIndex++ < lit;

                  return (
                    <span
                      key={i}
                      className={cn(
                        "relative -mx-px rounded-[5px] px-[3px] py-0.5 transition-[background-color,box-shadow] duration-300",
                        isLit && "bg-highlight shadow-[inset_0_-2px_0_var(--info)]",
                      )}
                    >
                      {isLit && (
                        <motion.span
                          initial={{ opacity: 0, y: 3 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, ease: EASE }}
                          className="text-info absolute -top-[1.45em] left-[3px] text-[9.5px] leading-none font-bold tracking-[0.05em] whitespace-nowrap uppercase"
                        >
                          {label}
                        </motion.span>
                      )}
                      {text}
                    </span>
                  );
                })}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="text-muted-foreground mt-3 flex h-5 items-center gap-1.5 text-[13px] font-medium" aria-live="polite">
            {(phase === "arrive" || phase === "reading") && (
              <>
                <Sparkles className="text-info size-3.5 animate-[spin_3s_linear_infinite]" aria-hidden="true" />
                <span className="breathe">Reading your SMS…</span>
              </>
            )}
            {(phase === "found" || phase === "filed") && <span>Found a transaction</span>}
          </p>

          <div className="mt-2 min-h-[64px] border-t pt-2">
            <AnimatePresence mode="wait">
              {(phase === "found" || phase === "filed") && (
                <motion.div
                  key={`row-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="grid grid-cols-[36px_minmax(0,1fr)_auto] items-center gap-x-3 py-2"
                >
                  <motion.span
                    key={phase}
                    initial={{ scale: phase === "filed" ? 0.7 : 1 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 420, damping: 18 }}
                    className="row-span-2"
                  >
                    {phase === "filed" ? <Tile color={example.category.color} Icon={example.category.Icon} /> : <Tile />}
                  </motion.span>
                  <p className="truncate font-semibold">{example.brand}</p>
                  <p className="text-muted-foreground col-start-2 text-[12.5px]">
                    {phase === "filed" ? `${example.category.name} · remembered for next time` : "New brand"}
                  </p>
                  <p className="font-rounded col-start-3 row-span-2 row-start-1 text-[15px] font-semibold">
                    <CountUp value={example.amount} decimals={2} start duration={0.8} />
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-3 flex h-6 items-center justify-between gap-3">
            <AnimatePresence>
              {phase === "filed" && (
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="text-success flex items-center gap-1.5 text-[13px] font-semibold"
                >
                  <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                  Added to {example.category.name}
                </motion.p>
              )}
            </AnimatePresence>
            <div className="ml-auto flex gap-1.5" role="group" aria-label="Example messages">
              {EXAMPLES.map((item, i) => (
                <button
                  key={item.brand}
                  type="button"
                  onClick={() => show(i)}
                  aria-label={`Show the ${item.category.name} example`}
                  aria-pressed={i === index}
                  className={cn("h-1.5 rounded-full transition-all duration-300", i === index ? "bg-foreground w-5" : "bg-border hover:bg-muted-foreground w-1.5")}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
