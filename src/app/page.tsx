import { Footer, Header } from "@/components/chrome";
import { About } from "@/components/sections/About";
import { DishGrid } from "@/components/sections/DishGrid";
import { Hero } from "@/components/sections/Hero";
import { MenuSampler } from "@/components/sections/MenuSampler";
import { Reviews } from "@/components/sections/Reviews";
import { StickyBar } from "@/components/sections/StickyBar";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Visit } from "@/components/sections/Visit";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <DishGrid />
        <MenuSampler />
        <Reviews />
        <About />
        <Visit />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
