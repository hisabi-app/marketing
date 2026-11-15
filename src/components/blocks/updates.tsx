"use client";

import { useState } from "react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export const Updates = ({ className }: { className?: string }) => {
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
    <section id="updates" className={cn("pb-8", className)}>
      <div className="container">
        <Reveal className="bg-card mx-auto max-w-3xl rounded-[28px] px-6 py-12 text-center shadow-sm md:px-12 md:py-16">
          <p className="text-muted-foreground text-sm font-medium">Product updates</p>
          <h2 className="mx-auto mt-2 max-w-xl text-3xl leading-tight text-balance md:text-5xl">Hear what&apos;s new in Hisabi</h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-md text-lg leading-snug text-balance">
            Get an email when there&apos;s something new to try, like a new feature or support for more banks.
          </p>

          <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <label htmlFor="updates-email" className="sr-only">
              Email
            </label>
            <Input
              id="updates-email"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background h-11 flex-1 rounded-full border-0 px-5 shadow-none"
              disabled={isSubmitting}
            />
            <Button type="submit" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Sending…" : "Subscribe"}
            </Button>
          </form>

          <p className="text-muted-foreground mt-4 text-sm">No spam. Unsubscribe any time.</p>
        </Reveal>
      </div>
    </section>
  );
};
