import { cn } from "@/lib/utils";

// The app icon: three ascending bars on ink, the same as in the app
export function AppIcon({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "bg-foreground grid size-[26px] shrink-0 place-items-center rounded-[7px]",
        className,
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 16 16" className="size-[62%]">
        <rect x="2" y="8.5" width="3" height="5.5" rx="1" fill="white" />
        <rect x="6.5" y="5.5" width="3" height="8.5" rx="1" fill="white" />
        <rect x="11" y="2" width="3" height="12" rx="1" fill="white" />
      </svg>
    </span>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[17px] font-bold tracking-[-0.02em]",
        className,
      )}
    >
      <AppIcon />
      hisabi
    </span>
  );
}
