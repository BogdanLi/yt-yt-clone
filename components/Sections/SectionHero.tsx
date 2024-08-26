import Image from "next/image";
import { Button } from "../UI/Buttons";
import Container from "../UI/Container";

import hero from "@/assets/images/hero.png";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <div className="grid md:grid-cols-5 items-center gap-12 my-12">
          <div className="col-span-3 text-center sm:text-start md:w-3/4">
            <p className="text-2xl md:text-4xl">
              Школа{" "}
              <span className="font-bold">
                <span className="text-secondary">{"{"}</span>
                {"программирования"}
                <span className="text-secondary">{"}"}</span>
              </span>{" "}
              для тех, кому нужны реальные навыки, а не просто сертификат
            </p>
            <p className="mt-11">
              Пройдите тестирование, чтобы получить доступ к бесплатным вводным
              урокам
            </p>
            <Button variant="secondary" className="mt-4">
              Пройти тестирование
            </Button>
          </div>
          <div className="hidden md:block col-span-2">
            <Image src={hero.src} priority alt="" width={400} height={400} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
