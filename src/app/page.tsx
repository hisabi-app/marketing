import { Background } from "@/components/background";
import { Features } from "@/components/blocks/features";
import { FeaturesGrid } from "@/components/blocks/features-grid";
import { GetNotified } from "@/components/blocks/get-notified";
import { Hero } from "@/components/blocks/hero";

export default function Home() {
  return (
    <>
      <Background className="via-muted to-muted/80">
        <Hero />
        <Features />
        <FeaturesGrid />
      </Background>
      <Background variant="bottom">
        <GetNotified />
      </Background>
    </>
  );
}
