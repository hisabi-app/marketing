import { Background } from "@/components/background";
import { Bento } from "@/components/blocks/bento";
import { Hero } from "@/components/blocks/hero";
import { Updates } from "@/components/blocks/updates";

export default function Home() {
  return (
    <Background>
      <Hero />
      <Bento />
      <Updates />
    </Background>
  );
}
