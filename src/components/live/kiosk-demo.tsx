"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { EASE } from "./primitives";

import { cn } from "@/lib/utils";


// The kiosk by day and at night; it switches by itself until you pick one
export function KioskDemo({ className }: { className?: string }) {
  const [night, setNight] = useState(false);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (touched) return;

    const timer = window.setInterval(() => setNight((current) => !current), 3800);

    return () => window.clearInterval(timer);
  }, [touched]);

  const pick = (value: boolean) => {
    setTouched(true);
    setNight(value);
  };

  return (
    <div className={cn("grid gap-4", className)}>
      <div className="border-foreground relative overflow-hidden rounded-[26px] border-[10px] shadow-xl" style={{ aspectRatio: "16 / 10" }}>
        <AnimatePresence initial={false}>
          <motion.div key={night ? "night" : "day"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.9, ease: EASE }} className="absolute inset-0">
            <Image
              src={night ? "/screens/kiosk-night.webp" : "/screens/kiosk-day.webp"}
              alt={night ? "The kiosk at night, in dark" : "The kiosk by day"}
              fill
              sizes="(min-width: 1024px) 900px, 100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="bg-card mx-auto inline-flex rounded-full p-[3px] shadow-sm" role="group" aria-label="Time of day">
        {[
          { value: false, label: "Day", Icon: Sun },
          { value: true, label: "From 10pm", Icon: Moon },
        ].map(({ value, label, Icon }) => (
          <button
            key={label}
            type="button"
            aria-pressed={night === value}
            onClick={() => pick(value)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[13px] font-semibold transition-colors duration-300",
              night === value ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
            )}
          >
            <Icon className="size-3.5" aria-hidden="true" />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
