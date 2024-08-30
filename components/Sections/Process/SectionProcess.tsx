"use client";

import Container from "@/components/UI/Container";
import Section from "@/components/UI/Section";
import ProcessCard from "./ProcessCard";
import { Button } from "@/components/UI/Buttons";
import Typography from "@/components/UI/Typography";

import arrow from "@/assets/icons/diagonal-arrow.svg";
import Image from "next/image";
import { usePopupStore } from "@/providers/popups-provider";

const steps = [
  {
    step: "01",
    title: "Весь материал разбит на небольшие уроки",
    description:
      "Теория и практика подаются маленькими порциями. Так вам будет легче усваивать новые знания.",
  },
  {
    step: "02",
    title: "Обучение через практику",
    description:
      "Всё, что вы узнали, вы тут же начинаете применять на практике. Вы сразу видите результаты своего труда.",
  },
  {
    step: "03",
    title: "Нет ограничений по времени",
    description:
      "Можно совмещать учёбу с работой и другими делами. Не нужно выпрашивать академический отпуск, если пришлось сделать перерыв.",
  },
];

const ProcessSection = () => {
  const { showModal } = usePopupStore((state) => state);

  return (
    <Section id="process">
      <Container>
        <Typography variant="h1" center>
          Как происходит обучение на YtYt?
        </Typography>
        <p className="mx-auto text-center text-xs lg:w-1/2 lg:text-base">
          Обучение должно быть комфортным. Поэтому мы разработали собственную
          платформу для обучения программированию. На ней вы можете не только
          изучать теорию, но и запускать готовые примеры и даже писать свой
          собственный код.
        </p>
        <div className="mt-8 grid gap-16 rounded-3xl bg-white p-6 lg:grid-cols-3 lg:p-14">
          {steps.map((step) => (
            <ProcessCard key={step.step} {...step} />
          ))}
        </div>
        <div className="mx-auto mt-4 flex flex-col items-center gap-4 rounded-3xl bg-white p-2 text-center lg:w-fit lg:flex-row lg:rounded-full lg:text-start">
          <Button onClick={showModal} variant="secondary" className="h-full">
            Начать обучение
            <Image src={arrow.src} alt="arrow" width={16} height={16} />
          </Button>
          <p className="w-80 text-sm font-semibold lg:w-96">
            Попробуйте, первые уроки бесплатны, но нужно пройти тестирование
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default ProcessSection;
