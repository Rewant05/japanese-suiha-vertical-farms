import Hero from "@/components/Hero";
import SmartFarmDashboard from "@/components/SmartFarmDashboard";
import SolutionCards from "@/components/SolutionCards";
import FarmingProcess from "@/components/FarmingProcess";
import TechnologySection from "@/components/TechnologySection";
import SustainabilitySection from "@/components/SustainabilitySection";
import FarmCaseStudies from "@/components/FarmCaseStudies";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <SolutionCards />
      <SmartFarmDashboard />
      <FarmingProcess />
      <TechnologySection />
      <FarmCaseStudies />
      <SustainabilitySection />
      <ContactSection />
    </>
  );
}
