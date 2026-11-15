import Link from "next/link";

import type { Metadata } from "next";

import { Background } from "@/components/background";
import { Button } from "@/components/ui/button";

// Only reached from the updates form, so keep it out of search results
export const metadata: Metadata = {
  title: "Couldn't subscribe",
  robots: { index: false, follow: true },
};

export default function ErrorPage() {
  return (
    <Background>
      <div className="container flex min-h-[70vh] flex-col items-center justify-center py-28 text-center lg:min-h-[80vh] lg:py-32">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="bg-destructive/10 text-destructive rounded-full p-6">
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-3xl tracking-tight md:text-5xl lg:text-6xl">
              We couldn&apos;t subscribe you
            </h1>
            <p className="text-muted-foreground mx-auto max-w-xl text-lg leading-relaxed">
              Something went wrong on our side. Please try again in a moment.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/#updates">Try again</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/">Back to home</Link>
            </Button>
          </div>
        </div>
      </div>
    </Background>
  );
}
