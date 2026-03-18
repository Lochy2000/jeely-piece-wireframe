import { SiteNavbar } from "@/components/SiteNavbar";
import { PageHero } from "@/components/PageHero";
import { EventsGrid } from "@/components/EventsGrid";
import { DonateCta } from "@/components/DonateCta";
import { SiteFooter } from "@/components/SiteFooter";

export default function WhatsOn() {
  return (
    <div>
      <SiteNavbar />
      <PageHero
        eyebrow="What's On"
        title="What's happening at Jeely"
        subtitle="Activities, workshops and sports sessions for children across Castlemilk. Something for every child, every week."
        ctaLabel="Book now"
        ctaHref="#events"
      />
      <EventsGrid />
      <DonateCta />
      <SiteFooter />
    </div>
  );
}
