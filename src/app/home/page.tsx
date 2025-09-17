import ProjectShowcase from "./_components/ProjectShowcase";
import { CaseStudiesBanner } from "./_components/CaseStudiesBanner";
import AudienceSegments from "./_components/AudienceSegments";
import CallToActionWave from "./_components/CallToActionWave";
import SiteFooter from "./_components/SiteFooter";

export default function HomePage() {
  return (
    <>
      <ProjectShowcase />
      <CaseStudiesBanner />
      <AudienceSegments />
      <CallToActionWave />
      <SiteFooter />
    </>
  );
}
