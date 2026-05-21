import { Nav } from "@/components/Nav";
import { HeroSection } from "@/components/HeroSection";
import { SingleSection } from "@/components/SingleSection";
import { BandSection } from "@/components/BandSection";
import { RaicesSection } from "@/components/RaicesSection";
import { MerchSection } from "@/components/MerchSection";
import { TourSection } from "@/components/TourSection";
import { FooterSection } from "@/components/FooterSection";
import { CartDrawer } from "@/components/CartDrawer";
import { MarqueeBanner } from "@/components/MarqueeBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Nav />
      <HeroSection />
      <MarqueeBanner variant="primary" direction="left" />
      <SingleSection />
      <BandSection />
      <RaicesSection />
      <MarqueeBanner variant="secondary" direction="right" />
      <MerchSection />
      <TourSection />
      <MarqueeBanner variant="primary" direction="left" />
      <FooterSection />
      <CartDrawer />
    </div>
  );
}
