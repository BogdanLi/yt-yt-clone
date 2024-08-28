import Image from "next/image";
import Container from "../../UI/Container";
import Section from "../../UI/Section";

import techs from "@/assets/images/tech.svg";
import Typography from "@/components/UI/Typography";

const TechSection = () => {
  return (
    <Section className="bg-white" id="curriculum">
      <Container className="space-y-4">
        <Typography variant="h1" center>
          Какие технологии вы изучите:
        </Typography>
        <div className="flex justify-center rounded-[48px] bg-[#EAF2F5] px-4 py-6 sm:px-12 lg:py-12 lg:pb-0">
          <div className="grid md:grid-cols-2 lg:w-3/4">
            <div className="hidden md:block">
              <Image src={techs.src} width={350} height={350} alt="" />
            </div>
            <div>
              <div className="flex flex-wrap gap-2 text-sm sm:text-base">
                <div className="w-fit rounded-full bg-[#5096FF] px-4 py-2 text-white">
                  Язык программирования Python
                </div>
                <div className="w-fit rounded-full bg-[#FFB359] px-4 py-2 text-white">
                  Сети
                </div>
                <div className="w-fit rounded-full bg-[#FF6F50] px-4 py-2 text-white">
                  Базы данных
                </div>
                <div className="w-fit rounded-full bg-[#4BD071] px-4 py-2 text-white">
                  Фреймворки Falsk и Django
                </div>
                <div className="w-fit rounded-full bg-[#50C0FF] px-4 py-2 text-white">
                  Отладка и тестирование
                </div>
                <div className="w-fit rounded-full bg-[#4B77B9] px-4 py-2 text-white">
                  Docker
                </div>
                <div className="w-fit rounded-full bg-[#AF93FF] px-4 py-2 text-white">
                  Git
                </div>
              </div>
              <p className="mt-4 hidden text-xl font-semibold md:block">
                Это необходимый минимум для современного backend-разработчика
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default TechSection;
