import { Footer, Header } from "@/components/chrome";
import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { StickyBar } from "@/components/sections/StickyBar";
import { Visit } from "@/components/sections/Visit";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Visit />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
