import Faqs from "@/components/faqs";
import FundraisingCards from "@/components/fundraising";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import TeamSection from "@/components/team";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <FundraisingCards />
      <TeamSection />
      <Faqs />
    </div>
  );
}
