import { SiteNavbar } from "@/components/SiteNavbar";
import { EventHero } from "@/components/EventHero";
import { EventDetails } from "@/components/EventDetails";
import { EventBooking } from "@/components/EventBooking";
import { EventsPreview } from "@/components/EventsPreview";
import { SiteFooter } from "@/components/SiteFooter";

export default function Event() {
  return (
    <div>
      <SiteNavbar />
      <EventHero />
      <EventDetails />
      <EventBooking />
      <EventsPreview />
      <SiteFooter />
    </div>
  );
}
