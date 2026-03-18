import { SiteNavbar } from "@/components/SiteNavbar";
import { PageHero } from "@/components/PageHero";
import { SupportDonate } from "@/components/SupportDonate";
import { SupportFundraise } from "@/components/SupportFundraise";
import { SupportCorporate } from "@/components/SupportCorporate";
import { SupportVolunteer } from "@/components/SupportVolunteer";
import { DonateCta } from "@/components/DonateCta";
import { SiteFooter } from "@/components/SiteFooter";

export default function SupportUs() {
  return (
    <div>
      <SiteNavbar />
      <PageHero
        eyebrow="Support Us"
        title="Help us keep going"
        subtitle="Fifty years of Jeely has been made possible by the generosity of our community. Here's how you can be part of the next chapter."
        ctaLabel="Donate now"
        ctaHref="#donate"
        secondaryLabel="Fundraise"
        secondaryHref="#fundraise"
      />
      <SupportDonate />
      <SupportFundraise />
      <SupportCorporate />
      <SupportVolunteer />
      <DonateCta />
      <SiteFooter />
    </div>
  );
}
