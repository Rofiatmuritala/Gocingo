import Faqs from "@/components/faqs";
import FundraisingCards from "@/components/fundraising";
import Hero from "@/components/hero";
import Project from "@/components/project";
import TeamSection from "@/components/team";

export default function Home() {
  return (
    <div>
      <Hero />
      <Project />
      <FundraisingCards />
      <TeamSection />
      <Faqs />
    </div>
  );
}
