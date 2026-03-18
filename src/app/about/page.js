import { SiteNavbar } from "@/components/SiteNavbar";
import { PageHero } from "@/components/PageHero";
import { AboutMission } from "@/components/AboutMission";
import { AboutPeople } from "@/components/AboutPeople";
import { AboutCentres } from "@/components/AboutCentres";
import { AboutReports } from "@/components/AboutReports";
import { DonateCta } from "@/components/DonateCta";
import { SiteFooter } from "@/components/SiteFooter";

export default function About() {
  return (
    <div>
      <SiteNavbar />
      <PageHero
        eyebrow="Est. 1974"
        title="For the people, by the people"
        subtitle="A grassroots charity rooted in Castlemilk for over 50 years. We exist to give every child the chance to play, grow and belong."
        ctaLabel="Our story"
        ctaHref="#mission"
        secondaryLabel="Donate"
        secondaryHref="/support-us"
      />
      <AboutMission />
      <AboutPeople />
      <AboutCentres />
      <AboutReports />
      <DonateCta />
      <SiteFooter />
    </div>
  );
}
