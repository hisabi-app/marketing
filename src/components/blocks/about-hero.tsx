import { DashedLine } from "@/components/dashed-line";



export function AboutHero() {
  return (
    <section className="">
      <div className="container flex flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            The Story of Hisabi
          </h1>

          <div className="text-muted-foreground mt-8 max-w-2xl space-y-6 text-lg text-balance">
            <p>
              In 2021, I sat in a room full of people during a financial wellness session. The speaker asked one question: &quot;Who here knows exactly how much they spent on groceries last month?&quot;
            </p>
            <p>
              The room went silent. I went silent.
            </p>
            <p>
              I was <strong className="text-foreground">$35,000 in debt</strong> after university, living paycheck to paycheck, with zero visibility into my own habits. That silence was the trigger I needed to take control.
            </p>
            <p>
              I started small—tracking every SMS transaction in a spreadsheet. Eventually, I automated it.
            </p>
            <p>
              That little system became Hisabi. It didn&apos;t just help me track expenses; it helped me <strong className="text-foreground">pay off every cent of that $35k debt</strong> and build real wealth.
            </p>
            <p>
              You don&apos;t need to be a finance expert. You just need a system that works. Hisabi is mine, and I hope it becomes yours.
            </p>
            <p className="text-sm">
              <a 
                href="https://www.linkedin.com/posts/saleemhadad_finance-activity-6870440420137021440-_V_H?utm_source=share&utm_medium=member_desktop&rcm=ACoAAByW018BG2qjzJKVNvFjSUlRUzL8ev3FPxk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Read my first LinkedIn post about this journey →
              </a>
            </p>
          </div>
        </div>

        <div
          className={`relative flex flex-1 flex-col justify-center gap-3 pt-10 lg:pt-0 lg:pl-10`}
        >
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          <div className="flex flex-col gap-6">
             <div className="flex flex-col gap-1">
              <div className="font-display text-4xl tracking-wide md:text-5xl">
                100%
              </div>
              <div className="text-muted-foreground">Open Source</div>
            </div>
             <div className="flex flex-col gap-1">
              <div className="font-display text-4xl tracking-wide md:text-5xl">
                Private
              </div>
              <div className="text-muted-foreground">Your Data is Yours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
