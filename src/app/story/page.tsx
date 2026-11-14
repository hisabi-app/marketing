import { Background } from "@/components/background";
import { AboutHero } from "@/components/blocks/about-hero";
import { GetNotified } from "@/components/blocks/get-notified";

export default function AboutPage() {
  return (
    <Background>
      <div className="py-28 lg:py-32 lg:pt-44">
        <AboutHero />
      </div>
      <GetNotified />
    </Background>
  );
}
