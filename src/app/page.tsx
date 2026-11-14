import { Background } from "@/components/background";
import { GetNotified } from "@/components/blocks/get-notified";
import { Hero } from "@/components/blocks/hero";
import { Ownership, Showcase } from "@/components/blocks/showcase";

export default function Home() {
  return (
    <Background>
      <Hero />
      <Showcase />
      <Ownership />
      <GetNotified />
    </Background>
  );
}
