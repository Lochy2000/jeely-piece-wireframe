import { SiteNavbar } from "@/components/SiteNavbar";
import { HeroSection } from "@/components/HeroSection";
import { AudiencePaths } from "@/components/AudiencePaths";
import { FiveDecades } from "@/components/FiveDecades";
import { EventsPreview } from "@/components/EventsPreview";
import { OurServices } from "@/components/OurServices";
import { DonateCta } from "@/components/DonateCta";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <div>
      <SiteNavbar />
      <HeroSection />
      <AudiencePaths />
      <FiveDecades />
      <EventsPreview />
      <OurServices />
      <DonateCta />
      <SiteFooter />
    </div>
  );
}
