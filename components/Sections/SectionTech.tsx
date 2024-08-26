import Image from "next/image";
import Container from "../UI/Container";

import techs from "@/assets/images/tech.png";

const TechSection = () => {
  return (
    <section className="bg-white py-8">
      <Container>
        <h1 className="text-xl sm:text-4xl font-semibold text-center">
          Какие технологии вы изучите:
        </h1>
        <div className="bg-[#EAF2F5] rounded-[48px] w-4/5 mx-auto mt-4 pt-6 px-4 sm:px-12 pb-6 sm:pb-0 grid sm:grid-cols-2">
          <div className="hidden sm:block">
            <Image src={techs.src} width={350} height={350} alt="" />
          </div>
          <div>
            <div className="flex gap-2 flex-wrap text-sm sm:text-base">
              <div className="bg-[#5096FF] w-fit px-4 py-2 text-white rounded-full">
                Язык программирования Python
              </div>
              <div className="bg-[#FFB359] w-fit px-4 py-2 text-white rounded-full">
                Сети
              </div>
              <div className="bg-[#FF6F50] w-fit px-4 py-2 text-white rounded-full">
                Базы данных
              </div>
              <div className="bg-[#4BD071] w-fit px-4 py-2 text-white rounded-full">
                Фреймворки Falsk и Django
              </div>
              <div className="bg-[#50C0FF] w-fit px-4 py-2 text-white rounded-full">
                Отладка и тестирование
              </div>
              <div className="bg-[#4B77B9] w-fit px-4 py-2 text-white rounded-full">
                Docker
              </div>
              <div className="bg-[#AF93FF] w-fit px-4 py-2 text-white rounded-full">
                Git
              </div>
            </div>
            <p className="text-xl font-semibold mt-4 hidden sm:block">
              Это необходимый минимум для современного backend-разработчика
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TechSection;
