import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NowInKota from "@/components/NowInKota";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import PaintingShowcase from "@/components/PaintingShowcase";
import CityAvailability from "@/components/CityAvailability";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <NowInKota />
      <WhyUs />
      <Services />
      <PaintingShowcase />
      <CityAvailability />
      <Footer />
    </main>
  );
}
