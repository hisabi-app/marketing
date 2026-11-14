import React from "react";

import { cn } from "@/lib/utils";

type BackgroundProps = {
  children: React.ReactNode;
  variant?: "top" | "bottom";
  className?: string;
};

// A plain off-white canvas, like the app: color lives in the content, never the background
export const Background = ({ children, className }: BackgroundProps) => {
  return <div className={cn("relative", className)}>{children}</div>;
};
