import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import OfficeTour from "@/components/OfficeTour";
import Services from "@/components/Services";
import TrustBar from "@/components/TrustBar";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Intro />
      <Services />
      <OfficeTour />
      <Contact />
    </main>
  );
}
