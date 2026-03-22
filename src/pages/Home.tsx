import { AboutSection } from "@/components/AboutSection";
import { FeaturedDishes } from "@/components/FeaturedDishes";
import { Footer } from "@/components/Footer";
import { GallerySection } from "@/components/GallerySection";
import { HeroSection } from "@/components/HeroSection";
import { LocationHours } from "@/components/LocationHours";
import { MenuPreview } from "@/components/MenuPreview";
import { QuickInfoStrip } from "@/components/QuickInfoStrip";
import { ReservationCTA } from "@/components/ReservationCTA";
import { Testimonials } from "@/components/Testimonials";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <QuickInfoStrip />
      <FeaturedDishes />
      <MenuPreview />
      <AboutSection />
      <WhyChooseUs />
      <GallerySection />
      <Testimonials />
      <ReservationCTA />
      <LocationHours />
      <Footer />
    </div>
  );
}
