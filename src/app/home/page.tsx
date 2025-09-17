import ProjectShowcase from "./_components/ProjectShowcase";
import { CaseStudiesBanner } from "./_components/CaseStudiesBanner";
import AudienceSegments from "./_components/AudienceSegments";
import CallToActionWave from "./_components/CallToActionWave";
import SiteFooter from "./_components/SiteFooter";
import HomeLayout from "./layout";
import ServicesOverview from "./_components/ServicesOverview";

export default function HomePage() {
  return (
    <HomeLayout>
      <ServicesOverview />
      <ProjectShowcase />
      <CaseStudiesBanner />
      <AudienceSegments />
      <CallToActionWave />
      <SiteFooter />
    </HomeLayout>
  );
}
