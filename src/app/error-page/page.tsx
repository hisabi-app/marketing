import { Background } from "@/components/background";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <Background className="via-muted to-muted/80">
      <div className="container flex min-h-[80vh] items-center justify-center">
        <div className="max-w-2xl text-center space-y-8">
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="bg-destructive/10 text-destructive rounded-full p-6">
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-3xl tracking-tight md:text-5xl lg:text-6xl">
              Oops! Something went wrong
            </h1>
            <p className="text-muted-foreground mx-auto max-w-xl text-lg leading-relaxed">
              We couldn't process your subscription at this time. This might be because 
              you're already subscribed or there was a technical issue. Please try again later.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/#get-notified">Try Again</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>

          <p className="text-muted-foreground text-sm">
            Need help?{" "}
            <a
              href="mailto:contact@saleem.dev"
              className="text-primary underline hover:no-underline"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </Background>
  );
}
