import HeroSection from "@/components/Sections/Hero/SectionHero";
import InfoSection from "@/components/Sections/Info/SectionInfo";
import PricingSection from "@/components/Sections/Pricing/SectionPricing";
import ProcessSection from "@/components/Sections/Process/SectionProcess";
import TeachingSection from "@/components/Sections/Teaching/SectionTeaching";
import TechSection from "@/components/Sections/Techs/SectionTech";
import ModalContainer from "@/components/UI/Modal/ModalContainer";
import QuizModal from "@/components/UI/Modal/QuizModal";

const Home = () => {
  return (
    <main>
      <QuizModal />
      <HeroSection />
      <TechSection />
      <TeachingSection />
      <ProcessSection />
      <InfoSection />
      <PricingSection />
    </main>
  );
};

export default Home;
