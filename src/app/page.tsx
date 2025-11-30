import { Background } from "@/components/background";
import { Features } from "@/components/blocks/features";
import { GetNotified } from "@/components/blocks/get-notified";
import { Hero } from "@/components/blocks/hero";
import { ResourceAllocation } from "@/components/blocks/resource-allocation";

export default function Home() {
  return (
    <>
      <Background className="via-muted to-muted/80">
        <Hero />
        <Features />
        <ResourceAllocation />
      </Background>
      <Background variant="bottom">
        <GetNotified />
      </Background>
    </>
  );
}
