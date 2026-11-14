"use client";

import { useState } from "react";

import { Check, Shirt, UtensilsCrossed } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { AppCard, EASE, Tile } from "./primitives";

import { cn } from "@/lib/utils";


const ITEMS = [
  { key: "brands", title: "2 new brands need a category", detail: "BASKIN ROBBINS JBR, LIFE PHARMACY", action: "Assign", tile: <Tile /> },
  { key: "shopping", title: "Shopping is over budget", detail: "2,293 of 1,500", action: "Review", tile: <Tile color="var(--cat-pink)" Icon={Shirt} /> },
  { key: "dining", title: "Dining out is ahead of pace", detail: "1,684 of 3,000", action: "Review", tile: <Tile color="var(--cat-orange)" Icon={UtensilsCrossed} /> },
];

// Needs you, as in the app: finish an item and it checks itself off
export function NeedsYouDemo() {
  const [done, setDone] = useState<string[]>([]);
  const [leaving, setLeaving] = useState<string[]>([]);
  const remaining = ITEMS.filter((item) => !done.includes(item.key));

  const finish = (key: string) => {
    setLeaving((current) => [...current, key]);
    window.setTimeout(() => setDone((current) => [...current, key]), 520);
  };

  const reset = () => {
    setDone([]);
    setLeaving([]);
  };

  return (
    <AppCard className="w-full">
      <div className="mb-1 flex items-center gap-2">
        <h4 className="text-base font-bold tracking-[-0.018em]">Needs you</h4>
        <AnimatePresence mode="popLayout">
          {remaining.length > 0 && (
            <motion.span
              key={remaining.length}
              initial={{ scale: 1.35 }}
              animate={{ scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
              className="bg-foreground text-background inline-grid h-5 min-w-5 place-items-center rounded-full px-1.5 text-[11.5px] font-bold"
            >
              {remaining.length}
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence initial={false}>
        {remaining.map((item, i) => {
          const isLeaving = leaving.includes(item.key);

          return (
            <motion.div
              key={item.key}
              layout
              exit={{ opacity: 0, height: 0, x: 16 }}
              transition={{ duration: 0.32, ease: EASE }}
              className="overflow-hidden"
            >
              <div className={cn("grid grid-cols-[36px_minmax(0,1fr)_auto] items-center gap-x-3 py-2.5", i > 0 && "border-t")}>
                <span className="row-span-2">{item.tile}</span>
                <p className="truncate font-semibold">{item.title}</p>
                <p className="text-muted-foreground font-rounded col-start-2 truncate text-[12.5px]">{item.detail}</p>
                <button
                  type="button"
                  onClick={() => finish(item.key)}
                  disabled={isLeaving}
                  className={cn(
                    "col-start-3 row-span-2 row-start-1 inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold transition-[background-color,color,transform] duration-200 active:scale-95",
                    isLeaving ? "bg-success text-white" : "bg-secondary hover:bg-accent",
                  )}
                >
                  {isLeaving ? (
                    <>
                      <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                      Done
                    </>
                  ) : (
                    item.action
                  )}
                </button>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      <AnimatePresence>
        {remaining.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE, delay: 0.1 }}
            className="flex items-center justify-between gap-3 py-1.5"
          >
            <p className="text-muted-foreground flex items-center gap-2.5 font-medium">
              <span className="bg-secondary text-success grid size-[22px] place-items-center rounded-full">
                <Check className="size-3" strokeWidth={3} aria-hidden="true" />
              </span>
              Nothing needs you right now
            </p>
            <button type="button" onClick={reset} className="text-muted-foreground hover:text-foreground text-[13px] font-semibold">
              Start over
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </AppCard>
  );
}
