"use client";

import { Car, ChevronRight, Shirt, ShoppingCart, UtensilsCrossed } from "lucide-react";

import { AppCard, CountUp, Ring, amount } from "./primitives";

const BUDGETS = [
  { name: "Shopping", spent: 2293, total: 1500, color: "var(--cat-pink)", Icon: Shirt },
  { name: "Dining out", spent: 1684, total: 3000, color: "var(--cat-orange)", Icon: UtensilsCrossed, ahead: true },
  { name: "Groceries", spent: 2536, total: 6000, color: "var(--cat-green)", Icon: ShoppingCart },
  { name: "Transport", spent: 1899, total: 4500, color: "var(--cat-purple)", Icon: Car },
];

export function BudgetsDemo() {
  return (
    <AppCard className="w-full">
      <div className="mb-2 flex items-center">
        <h4 className="text-base font-bold tracking-[-0.018em]">Budgets</h4>
        <span className="text-muted-foreground ml-auto inline-flex items-center text-[13px]">
          All <ChevronRight className="size-3.5" aria-hidden="true" />
        </span>
      </div>
      <div className="grid grid-cols-2 gap-y-4 sm:grid-cols-4">
        {BUDGETS.map((budget, i) => {
          const Icon = budget.Icon;
          const over = budget.spent > budget.total;

          return (
            <div key={budget.name} className="grid justify-items-center gap-px text-center">
              <Ring value={(budget.spent / budget.total) * 100} color={budget.color} delay={i * 0.08}>
                <Icon className="size-5" strokeWidth={2.4} style={{ color: budget.color }} aria-hidden="true" />
              </Ring>
              <p className="mt-1.5 text-[13px] font-semibold">{budget.name}</p>
              <p className="text-muted-foreground font-rounded text-xs">
                <CountUp value={budget.spent} /> / {amount(budget.total)}
              </p>
              <p className="text-[11.5px]">
                {over && <span className="text-destructive font-semibold">Over by {amount(budget.spent - budget.total)}</span>}
                {!over && budget.ahead && <span className="font-semibold text-[oklch(0.6_0.15_55)]">Ahead of pace</span>}
                {!over && !budget.ahead && <span className="text-muted-foreground">{amount(budget.total - budget.spent)} left</span>}
              </p>
            </div>
          );
        })}
      </div>
    </AppCard>
  );
}
