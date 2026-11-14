"use client";

import { useEffect, useRef, useState } from "react";

import type { LucideIcon } from "lucide-react";
import { animate, motion, useInView, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";


export const EASE = [0.22, 1, 0.36, 1] as const;

// "9486" → "9,486"; with decimals → "312.40"
export const amount = (value: number, decimals = 0) =>
  new Intl.NumberFormat("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(value);

// A category's icon on its color, the same tile as in the app
export function Tile({ color, Icon, className }: { color?: string; Icon?: LucideIcon; className?: string }) {
  if (!color || !Icon) {
    return (
      <span className={cn("bg-muted text-muted-foreground ring-border grid size-9 shrink-0 place-items-center rounded-[10px] text-[15px] font-bold ring-1 ring-inset", className)}>
        ?
      </span>
    );
  }

  return (
    <span className={cn("grid size-9 shrink-0 place-items-center rounded-[10px] text-white", className)} style={{ backgroundColor: color }}>
      <Icon className="size-[18px]" strokeWidth={2.4} aria-hidden="true" />
    </span>
  );
}

// Counts up to the value once it scrolls into view (or as soon as `start` turns true)
export function CountUp({ value, decimals = 0, start, duration = 1.1 }: { value: number; decimals?: number; start?: boolean; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(reduced ? value : 0);
  const go = start ?? inView;

  useEffect(() => {
    if (!go) return;
    if (reduced) {
      setShown(value);
      return;
    }

    const controls = animate(0, value, { duration, ease: EASE, onUpdate: setShown });

    return () => controls.stop();
  }, [go, value, duration, reduced]);

  return (
    <span ref={ref} className="tabular-nums">
      {amount(shown, decimals)}
    </span>
  );
}

// A budget ring that draws itself in
export function Ring({ value, color, delay = 0, size = 64, children }: { value: number; color: string; delay?: number; size?: number; children?: React.ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const progress = Math.max(0, Math.min(1, value / 100));

  return (
    <span ref={ref} className="relative grid shrink-0 place-items-center" style={{ width: size, height: size }}>
      <svg viewBox="0 0 60 60" className="absolute inset-0 size-full -rotate-90" aria-hidden="true">
        <circle cx="30" cy="30" r="25" fill="none" stroke="var(--muted)" strokeWidth="7" />
        <motion.circle
          cx="30"
          cy="30"
          r="25"
          fill="none"
          stroke={color}
          strokeWidth="7"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: inView ? progress : 0 }}
          transition={{ duration: 1.1, ease: EASE, delay }}
        />
      </svg>
      {children && <span className="relative grid place-items-center">{children}</span>}
    </span>
  );
}

// The white card every piece of the app sits on
export function AppCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("bg-card rounded-[22px] p-[18px] shadow-sm", className)}>{children}</div>;
}
