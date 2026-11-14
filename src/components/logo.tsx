import Image from "next/image";

import { cn } from "@/lib/utils";

// The Hisabi logo: the wordmark with three green bars (public/logo.svg)
export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.svg"
      alt="hisabi"
      width={1521}
      height={539}
      priority
      className={cn("h-9 w-auto", className)}
    />
  );
}
