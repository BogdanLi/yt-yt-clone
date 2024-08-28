import Container from "@/components/UI/Container";
import Section from "@/components/UI/Section";
import Image from "next/image";

import info1 from "@/assets/images/info-1.svg";
import info2 from "@/assets/images/info-2.svg";
import { ReactNode } from "react";

const InfoSection = () => {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <ImageCard src={info1.src} />
          <Card>
            <p className="text-3xl font-semibold">Помощь и поддержка</p>
            <p>
              Если в процессе обучения возникнут сложности, вы всегда сможете
              задать вопрос своему наставнику.
            </p>
            <p>
              Раз в несколько уроков вы будете получать большое задание, которое
              нужно будет сдавать на проверку код-ревьюеру. Он внимательно
              изучит ваш код, найдет ошибки и поможет вам стать лучше.{" "}
            </p>
          </Card>
          <Card>
            <p className="text-3xl font-semibold">Помощь и поддержка</p>
            <p>
              Если в процессе обучения возникнут сложности, вы всегда сможете
              задать вопрос своему наставнику.
            </p>
            <p>
              Раз в несколько уроков вы будете получать большое задание, которое
              нужно будет сдавать на проверку код-ревьюеру. Он внимательно
              изучит ваш код, найдет ошибки и поможет вам стать лучше.{" "}
            </p>
          </Card>
          <ImageCard src={info2.src} />
        </div>
      </Container>
    </Section>
  );
};

export default InfoSection;

interface ImageCardProps {
  src: string;
}

function ImageCard({ src }: ImageCardProps) {
  return (
    <div className="grid place-items-center rounded-3xl bg-gray p-10">
      <Image src={src} alt="" width={270} height={230} />
    </div>
  );
}

interface CardProps {
  children: ReactNode;
}

function Card({ children }: CardProps) {
  return (
    <div className="space-y-4 rounded-3xl bg-gray px-12 py-10 lg:col-span-2 lg:px-16">
      {children}
    </div>
  );
}
