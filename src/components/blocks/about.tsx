import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <section className="container mt-10 flex flex-col-reverse gap-8 md:mt-14 md:gap-14 lg:mt-20 lg:flex-row lg:items-start">
      {/* Left Column */}
      <div className="flex flex-1 flex-col gap-8 lg:gap-16 xl:gap-20">
        <ImageSection
          images={[
            { src: "/about/1.webp", alt: "Team collaboration" },
            { src: "/about/2.webp", alt: "Team workspace" },
          ]}
          className="xl:-translate-x-10"
        />

        <TextSection title="My Story">
          <p>
            In 2021, I sat in a room full of people during a financial wellness session. The speaker asked one question: &quot;Who here knows exactly how much they spent on groceries last month?&quot;
          </p>
          <p>
            The room went silent. I went silent.
          </p>
          <p>
            I was <strong>$35,000 in debt</strong> after university, living paycheck to paycheck, with zero visibility into my own habits. That silence was the trigger I needed to take control.
          </p>
        </TextSection>
      </div>

      {/* Right Column */}
      <div className="flex flex-1 flex-col gap-8 lg:gap-16 xl:gap-20">
        <TextSection>
          <p>
            I started small—tracking every SMS transaction in a spreadsheet. Eventually, I automated it.
          </p>
          <p>
            That little system became Hisabi. It didn&apos;t just help me track expenses; it helped me <strong>pay off every cent of that $35k debt</strong> and build real wealth.
          </p>
          <p>
            You don&apos;t need to be a finance expert. You just need a system that works. Hisabi is mine, and I hope it becomes yours.
          </p>
        </TextSection>

        <ImageSection
          images={[
            { src: "/about/3.webp", alt: "Modern workspace" },
            { src: "/about/4.webp", alt: "Team collaboration" },
          ]}
          className="hidden lg:flex xl:translate-x-10"
        />
      </div>
    </section>
  );
};

export default About;

interface ImageSectionProps {
  images: { src: string; alt: string }[];
  className?: string;
}

export function ImageSection({ images, className }: ImageSectionProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-[2/1.5] overflow-hidden rounded-2xl"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

interface TextSectionProps {
  title?: string;
  children: React.ReactNode;
  ctaButton?: {
    href: string;
    text: string;
  };
}

export function TextSection({
  title,
  children,
  ctaButton,
}: TextSectionProps) {
  return (
    <section className="flex-1 space-y-4 text-lg md:space-y-6">
      {title && <h2 className="text-foreground text-4xl">{title}</h2>}
      <div className="text-muted-foreground max-w-xl space-y-6">
        {children}
      </div>
      {ctaButton && (
        <div className="mt-8">
          <Link href={ctaButton.href}>
            <Button size="lg">{ctaButton.text}</Button>
          </Link>
        </div>
      )}
    </section>
  );
}
