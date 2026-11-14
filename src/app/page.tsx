import { Background } from "@/components/background";
import { Bento } from "@/components/blocks/bento";
import { GetNotified } from "@/components/blocks/get-notified";
import { Hero } from "@/components/blocks/hero";

export default function Home() {
  return (
    <Background>
      <Hero />
      <Bento />
      <GetNotified />
    </Background>
  );
}
