import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
      <WhyUs />
      <Services />
      <PaintingShowcase />
      <CityAvailability />
      <Footer />
    </main>
  );
}
