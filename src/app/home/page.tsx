import HeroHeader from "./_components/HeroHeader";
import ProjectShowcase from "./_components/ProjectShowcase";
import { CaseStudiesBanner } from "./_components/CaseStudiesBanner";
import AudienceSegments from "./_components/AudienceSegments";
import CallToActionWave from "./_components/CallToActionWave";
import SiteFooter from "./_components/SiteFooter";
import HomeLayout from "./layout";

export default function HomePage() {
  return (
    <HomeLayout>
      <HeroHeader />
      <ProjectShowcase />
      <CaseStudiesBanner />
      <AudienceSegments />
      <CallToActionWave />
      <SiteFooter />
    </HomeLayout>
  );
}
