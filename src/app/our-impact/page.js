import { SiteNavbar } from "@/components/SiteNavbar";
import { ImpactStats } from "@/components/ImpactStats";
import { ImpactStories } from "@/components/ImpactStories";
import { ImpactReports } from "@/components/ImpactReports";
import { ImpactFunders } from "@/components/ImpactFunders";
import { DonateCta } from "@/components/DonateCta";
import { SiteFooter } from "@/components/SiteFooter";

export default function OurImpact() {
  return (
    <div>
      <SiteNavbar />
      <ImpactStats />
      <ImpactStories />
      <ImpactReports />
      <ImpactFunders />
      <DonateCta />
      <SiteFooter />
    </div>
  );
}
