"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export const GetNotified = ({ className }: { className?: string }) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create a form and submit it to the external service
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://app.nashra.ai/api/subscribe/WLS8KKQvCoxgtEQR9uwFNLMq";

    const emailInput = document.createElement("input");
    emailInput.type = "hidden";
    emailInput.name = "email";
    emailInput.value = email;

    form.appendChild(emailInput);
    document.body.appendChild(form);
    form.submit();
  };

  return (
    <section id="get-notified" className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-4xl">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Get Notified When We Launch
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
            Be the first to know when Hisabi is ready. Join our waitlist and get exclusive early access.
          </p>
        </div>

        <div className="mt-8 flex justify-center md:mt-12 lg:mt-20">
          <Card className="outline-primary relative w-full max-w-lg outline outline-2 rounded-2xl">
            <div className="bg-primary text-primary-foreground absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full px-6 py-2 text-sm font-semibold">
              🚀 Coming Soon
            </div>
            <CardContent className="flex flex-col gap-8 px-8 py-10">
              <div className="space-y-4 text-center">
                <h3 className="text-foreground text-2xl font-semibold">
                  Join the Waitlist
                </h3>
                <p className="text-muted-foreground text-lg">
                  Get exclusive early access and special launch pricing.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                    disabled={isSubmitting}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Get Notified"}
                </Button>
              </form>

              <p className="text-muted-foreground text-center text-sm">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
