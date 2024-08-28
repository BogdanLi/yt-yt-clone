import Image from "next/image";
import { Button } from "../../UI/Buttons";
import Container from "../../UI/Container";

import hero from "@/assets/images/hero.svg";
import Section from "../../UI/Section";
import Typography from "@/components/UI/Typography";

const HeroSection = () => {
  return (
    <Section>
      <Container>
        <div className="my-12 grid items-center gap-12 md:grid-cols-5">
          <div className="col-span-3 text-center sm:text-start md:w-3/4">
            <Typography variant="h1" className="font-normal">
              Школа{" "}
              <span className="font-bold">
                <span className="text-secondary">{"{"}</span>
                {"программирования"}
                <span className="text-secondary">{"}"}</span>
              </span>{" "}
              для тех, кому нужны реальные навыки, а не просто сертификат
            </Typography>
            <p className="mt-11">
              Пройдите тестирование, чтобы получить доступ к бесплатным вводным
              урокам
            </p>
            <Button variant="secondary" className="mt-4">
              Пройти тестирование
            </Button>
          </div>
          <div className="col-span-2 hidden md:block">
            <Image src={hero.src} priority alt="" width={400} height={400} />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HeroSection;
