"use client";

import { useEffect, useRef, useState } from "react";

import { ChevronRight, Landmark, Plus, Zap } from "lucide-react";
import { useInView, useReducedMotion } from "motion/react";

import { AppCard, Tile } from "./primitives";

import { cn } from "@/lib/utils";


const INSIGHTS = [
  { lead: "Most spent at ", strong: "Etisalat", detail: "AED 498 across 2 purchases", tile: <Tile color="var(--cat-blue)" Icon={Zap} /> },
  { lead: "", strong: "Healthcare", tail: " is up on last month", detail: "AED 1,200 more than this time last month", tile: <Tile color="var(--cat-red)" Icon={Plus} /> },
  { lead: "You saved ", strong: "AED 3,700", detail: "Last put aside on 7 Nov", tile: <Tile color="var(--cat-green)" Icon={Landmark} /> },
];

// Insights written as plain sentences, typed out one after another
export function InsightsDemo({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduced = useReducedMotion();
  const sentences = INSIGHTS.map((insight) => insight.lead + insight.strong + (insight.tail ?? ""));
  const total = sentences.reduce((sum, sentence) => sum + sentence.length, 0);
  const [typed, setTyped] = useState(reduced ? total : 0);

  useEffect(() => {
    if (!inView || reduced || typed >= total) return;

    const timer = window.setTimeout(() => setTyped((count) => count + 1), 26);

    return () => window.clearTimeout(timer);
  }, [inView, reduced, typed, total]);

  let offset = 0;

  return (
    <AppCard className={cn("w-full", className)}>
      <div ref={ref}>
        <div className="mb-1 flex items-center">
          <h4 className="text-base font-bold tracking-[-0.018em]">Insights</h4>
          <span className="text-muted-foreground ml-auto inline-flex items-center text-[13px]">
            All <ChevronRight className="size-3.5" aria-hidden="true" />
          </span>
        </div>
        {INSIGHTS.map((insight, i) => {
          const start = offset;
          offset += sentences[i].length;
          const visible = Math.max(0, Math.min(sentences[i].length, typed - start));
          const typing = visible > 0 && visible < sentences[i].length;
          const complete = visible === sentences[i].length;
          const leadLength = insight.lead.length;
          const strongEnd = leadLength + insight.strong.length;
          const shown = sentences[i].slice(0, visible);

          return (
            <div key={insight.strong} className={cn("grid grid-cols-[36px_minmax(0,1fr)_14px] items-center gap-x-3 py-2.5", i > 0 && "border-t")}>
              <span className={cn("row-span-2 transition-opacity duration-300", visible > 0 ? "opacity-100" : "opacity-30")}>{insight.tile}</span>
              <p className={cn("min-h-[1.4em] font-medium", typing && "caret")}>
                {shown.slice(0, leadLength)}
                <b className="font-bold">{shown.slice(leadLength, strongEnd)}</b>
                {shown.slice(strongEnd)}
              </p>
              <p className={cn("text-muted-foreground font-rounded col-start-2 text-[12.5px] transition-opacity duration-500", complete ? "opacity-100" : "opacity-0")}>{insight.detail}</p>
              <ChevronRight className="text-muted-foreground col-start-3 row-span-2 row-start-1 size-3.5" aria-hidden="true" />
            </div>
          );
        })}
      </div>
    </AppCard>
  );
}
