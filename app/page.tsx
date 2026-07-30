import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Winner from "@/components/Winner";
import Marquee from "@/components/Marquee";
import Process from "@/components/Process";
import Variety from "@/components/Variety";
import Origin from "@/components/Origin";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Winner />
      <Marquee />
      <Process />
      <Variety />
      <Origin />
      <Footer />
    </main>
  );
}
