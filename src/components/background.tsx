import React from "react";

import { cn } from "@/lib/utils";

type BackgroundProps = {
  children: React.ReactNode;
  variant?: "top" | "bottom";
  className?: string;
};

const DOT = "color-mix(in oklch, var(--foreground) 13%, transparent)";

// A fine dot grid over the off-white canvas, running through every section so the page reads as one surface.
// It fades in under the navigation and out before the footer, and sits behind the content, so the cards rest on it
export const Background = ({ children, className }: BackgroundProps) => {
  return (
    <div className={cn("relative isolate", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: `radial-gradient(circle, ${DOT} 1px, transparent 1.4px)`,
          backgroundSize: "22px 22px",
          backgroundPosition: "center top",
          maskImage: "linear-gradient(to bottom, transparent 60px, black 240px, black calc(100% - 180px), transparent)",
        }}
      />
      {children}
    </div>
  );
};
