import { DashedLine } from "@/components/dashed-line";



export function AboutHero() {
  return (
    <section className="">
      <div className="container flex flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Financial Clarity for Everyone
          </h1>

          <p className="text-muted-foreground mt-5 text-2xl md:text-3xl lg:text-4xl">
            Hisabi helps you understand your money without fear.
          </p>

          <p className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg text-balance md:block lg:mt-12">
            Hisabi is an open-source personal finance application that reads financial SMS messages, extracts transactions, categorizes spending, and provides insights, dashboards, and reports.
            <br />
            <br />
            We help everyday people instantly understand their financial habits without spreadsheets, bank integrations, or complex setup.
          </p>
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
