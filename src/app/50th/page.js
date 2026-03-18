import { SiteNavbar } from "@/components/SiteNavbar";
import { FiftiethHero } from "@/components/FiftiethHero";
import { FiftiethTimeline } from "@/components/FiftiethTimeline";
import { FiftiethBuyAPiece } from "@/components/FiftiethBuyAPiece";
import { DonateCta } from "@/components/DonateCta";
import { SiteFooter } from "@/components/SiteFooter";

export default function FiftiethYear() {
  return (
    <div>
      <SiteNavbar />
      <FiftiethHero />
      <FiftiethTimeline />
      <FiftiethBuyAPiece />
      <DonateCta />
      <SiteFooter />
    </div>
  );
}
