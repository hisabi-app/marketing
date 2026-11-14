"use client";

import { useRef } from "react";

import { motion, useInView } from "motion/react";

import { AppCard, CountUp, EASE } from "./primitives";

// Running totals by day: this month so far and all of last month
const THIS_MONTH = [620, 1180, 1650, 2210, 6890, 7400, 7720, 7980, 8130, 8640, 9010, 9420, 9890, 10285];
const LAST_MONTH = [540, 1290, 1900, 2600, 7150, 7980, 8300, 8480, 8700, 9100, 9620, 10240, 10900, 11317, 11800, 12320, 12900, 13350, 13800, 14420, 15100, 15800, 16380, 17000, 17650, 18200, 18760, 19280, 19700, 20140];

export function MonthDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });

  const max = 21000;
  const x = (day: number) => 2 + ((day - 1) / 29) * 298;
  const y = (value: number) => 80 - (value / max) * 72;
  const path = (values: number[]) => values.map((value, i) => `${i ? "L" : "M"}${x(i + 1).toFixed(1)} ${y(value).toFixed(1)}`).join(" ");
  const endX = x(THIS_MONTH.length);
  const endY = y(THIS_MONTH[THIS_MONTH.length - 1]);

  return (
    <AppCard className="w-full">
      <div ref={ref}>
        <p className="text-muted-foreground font-medium">Spent so far</p>
        <p className="font-rounded mt-0.5 text-[40px] leading-[1.1] font-bold tracking-[-0.03em]">
          <small className="text-muted-foreground mr-1 text-[0.45em] font-semibold tracking-normal">AED</small>
          <CountUp value={10285} />
        </p>
        <p className="text-muted-foreground mt-1 text-[13px]">
          <span className="bg-secondary text-foreground font-rounded mr-1 inline-block rounded-full px-2 font-bold">
            ↓ <CountUp value={1032} />
          </span>
          less than this time last month
        </p>
        <svg viewBox="0 0 340 86" className="mt-3 block h-auto w-full overflow-visible" role="img" aria-label="Spending so far this month against last month">
          <line x1="2" x2="300" y1="80" y2="80" stroke="var(--border)" />
          <motion.path
            d={path(LAST_MONTH)}
            fill="none"
            stroke="oklch(0.75 0.005 286)"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />
          <motion.path
            d={path(THIS_MONTH)}
            fill="none"
            stroke="var(--foreground)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: inView ? 1 : 0 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
          />
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }} transition={{ delay: 1.3, duration: 0.4 }}>
            <circle cx={endX} cy={endY} r="3.5" fill="var(--foreground)" stroke="var(--card)" strokeWidth="1.5" />
            <text x={endX + 7} y={endY + 3.5} fontSize="9" fontWeight="700" fill="var(--foreground)">
              Today
            </text>
          </motion.g>
        </svg>
      </div>
    </AppCard>
  );
}
