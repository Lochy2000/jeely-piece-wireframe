import { SiteNavbar } from "@/components/SiteNavbar";
import { PageHero } from "@/components/PageHero";
import { WorkJeelyExperience } from "@/components/WorkJeelyExperience";
import { WorkVacancies } from "@/components/WorkVacancies";
import { DonateCta } from "@/components/DonateCta";
import { SiteFooter } from "@/components/SiteFooter";

export default function WorkWithUs() {
  return (
    <div>
      <SiteNavbar />
      <PageHero
        eyebrow="Work With Us"
        title="Come work with us"
        subtitle="Join a team that makes a real difference every day. We're always looking for passionate people who care about Castlemilk's children."
        ctaLabel="See vacancies"
        ctaHref="#vacancies"
        secondaryLabel="Learn more"
        secondaryHref="#experience"
      />
      <WorkJeelyExperience />
      <WorkVacancies />
      <DonateCta />
      <SiteFooter />
    </div>
  );
}
