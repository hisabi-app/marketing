import Link from "next/link";

import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

import { Background } from "@/components/background";
import { Button } from "@/components/ui/button";

// Only reached from the updates form, so keep it out of search results
export const metadata: Metadata = {
  title: "You're subscribed",
  robots: { index: false, follow: true },
};

export default function ThanksPage() {
  return (
    <Background>
      <div className="container flex min-h-[70vh] flex-col items-center justify-center py-28 text-center lg:min-h-[80vh] lg:py-32">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="bg-primary/10 text-primary rounded-full p-6">
                <svg
                  className="h-16 w-16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-3xl tracking-tight md:text-5xl lg:text-6xl">
              You&apos;re subscribed
            </h1>
            <p className="text-muted-foreground mx-auto max-w-xl text-lg leading-relaxed">
              Thanks for signing up. We&apos;ll email you when there&apos;s
              something new in Hisabi.
            </p>
          </div>

          <div className="flex justify-center">
            <Button asChild size="lg" className="group gap-2">
              <Link href="/">
                <ArrowLeft className="size-5 transition-transform group-hover:-translate-x-1" />
                Back to home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Background>
  );
}
