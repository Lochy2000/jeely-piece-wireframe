import { SiteNavbar } from "@/components/SiteNavbar";
import { PageHero } from "@/components/PageHero";
import { ServicesEarlyYears } from "@/components/ServicesEarlyYears";
import { ServicesPlayzone } from "@/components/ServicesPlayzone";
import { ServicesPopup } from "@/components/ServicesPopup";
import { ServicesSchools } from "@/components/ServicesSchools";
import { ServicesBuyIn } from "@/components/ServicesBuyIn";
import { DonateCta } from "@/components/DonateCta";
import { SiteFooter } from "@/components/SiteFooter";

export default function OurServices() {
  return (
    <div>
      <SiteNavbar />
      <PageHero
        eyebrow="Our Services"
        title="Something for every child"
        subtitle="From nursery to age 12, across Castlemilk and beyond. Find the right programme for your child."
        ctaLabel="Book a session"
        ctaHref="#playzone"
        secondaryLabel="Contact us"
        secondaryHref="/contact"
      />
      <ServicesEarlyYears />
      <ServicesPlayzone />
      <ServicesPopup />
      <ServicesSchools />
      <ServicesBuyIn />
      <DonateCta />
      <SiteFooter />
    </div>
  );
}
