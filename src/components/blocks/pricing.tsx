"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const Pricing = ({ className }: { className?: string }) => {
  return (
    <section id="pricing" className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-4xl">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Simple, One-Time Pricing
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
            Pay once, own forever. No subscriptions, no recurring fees, just lifetime access to all features.
          </p>
        </div>

        <div className="mt-8 flex justify-center md:mt-12 lg:mt-20">
          <Card className="outline-primary relative w-full max-w-lg outline outline-4">
            <div className="bg-primary text-primary-foreground absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full px-6 py-2 text-sm font-semibold">
              🚀 Pre-Launch: 50% OFF
            </div>
            <CardContent className="flex flex-col gap-8 px-8 py-10">
              <div className="space-y-4 text-center">
                <h3 className="text-foreground text-2xl font-semibold">
                  Lifetime Access
                </h3>
                <div className="space-y-2">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-muted-foreground text-2xl line-through">
                      $149
                    </span>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-6xl font-bold">$75</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-lg">
                    One-time payment. Yours forever.
                  </p>
                  <p className="text-primary text-sm font-semibold">
                    Limited time pre-launch offer
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full" size="lg" asChild>
                  <a href="https://github.com/hisabi">Get Lifetime Access - $75</a>
                </Button>
                <Button variant="outline" className="w-full" size="lg" asChild>
                  <a href="https://github.com/hisabi">View Demo</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-muted-foreground mt-8 text-center text-sm">
          <p>
            Includes a 30-day money-back guarantee. Questions?{" "}
            <a
              href="https://github.com/hisabi"
              className="text-primary underline hover:no-underline"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
