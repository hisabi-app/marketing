import Link from "next/link";

import { Background } from "@/components/background";
import { Button } from "@/components/ui/button";

export default function ThanksPage() {
  return (
    <Background className="via-muted to-muted/80">
      <div className="container flex min-h-[80vh] items-center justify-center">
        <div className="max-w-2xl text-center space-y-8">
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="bg-primary/10 text-primary rounded-full p-6">
                <svg
                  className="h-16 w-16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
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
              You're on the list!
            </h1>
            <p className="text-muted-foreground mx-auto max-w-xl text-lg leading-relaxed">
              Thank you for signing up. We'll notify you as soon as Hisabi is ready to launch. 
              Keep an eye on your inbox for exclusive updates and early access.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/">Back to Home</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/story">Learn Our Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </Background>
  );
}
