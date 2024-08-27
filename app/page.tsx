import HeroSection from "@/components/Sections/Hero/SectionHero";
import InfoSection from "@/components/Sections/Info/SectionInfo";
import ProcessSection from "@/components/Sections/Process/SectionProcess";
import TeachingSection from "@/components/Sections/Teaching/SectionTeaching";
import TechSection from "@/components/Sections/Techs/SectionTech";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <TechSection />
      <TeachingSection />
      <ProcessSection />
      <InfoSection />
    </main>
  );
};

export default Home;
