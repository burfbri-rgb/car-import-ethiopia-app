import Hero from "@/components/home/Hero";
import FeaturedCars from "@/components/home/FeaturedCars";
import ServicesPreview from "@/components/home/ServicesPreview";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCars />
      <ServicesPreview />
      <CTASection />
    </>
  );
}
