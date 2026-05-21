import { Nav } from "@/components/Nav";
import { HeroSection } from "@/components/HeroSection";
import { BandSection } from "@/components/BandSection";
import { MerchSection } from "@/components/MerchSection";
import { TourSection } from "@/components/TourSection";
import { FooterSection } from "@/components/FooterSection";
import { CartDrawer } from "@/components/CartDrawer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Nav />
      <HeroSection />
      <BandSection />
      <MerchSection />
      <TourSection />
      <FooterSection />
      <CartDrawer />
    </div>
  );
}
