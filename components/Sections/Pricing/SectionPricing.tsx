import Container from "@/components/UI/Container";
import Section from "@/components/UI/Section";
import Typography from "@/components/UI/Typography";

import blocks from "@/assets/images/blocks.svg";
import refund from "@/assets/images/refund.svg";
import payment from "@/assets/images/payment.svg";
import microphone from "@/assets/images/microphone.svg";

import Image from "next/image";
import PricingTable from "./PricingTable";
import { Button } from "@/components/UI/Buttons";
import arrow from "@/assets/icons/diagonal-arrow.svg";

const cards = [
  {
    id: 1,
    img: blocks.src,
    text: "Весь курс разбит на несколько блоков. Оплата поэтапная вы платите только за тот блок, который сейчас проходите.",
  },
  {
    id: 2,
    img: payment.src,
    text: "Любой из блоков вы можете оплатить в рассрочку",
  },
  {
    id: 3,
    img: refund.src,
    text: "Если передумаете учиться, то возврат можно оформить в любой момент. Возвращаем деньги за 3 рабочих дня.",
  },
];

const PricingSection = () => {
  return (
    <Section id="pricing">
      <Container>
        <Typography variant="h1" center>
          Стоимость обучения
        </Typography>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              className="flex flex-col items-center gap-8 lg:flex-row"
              key={card.id}
            >
              <Image src={card.img} alt="" width={60} height={60} />
              <p>{card.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 overflow-scroll rounded-3xl bg-white p-10 lg:overflow-hidden">
          <PricingTable />
        </div>
        <p className="ps-8 pt-8 text-[#8E8E8E]">
          * если занятиям уделяется около 20 часов в неделю
        </p>
        <div className="mt-4 grid gap-12 rounded-3xl bg-[#EAF2F5] p-16 lg:grid-cols-12">
          <div className="grid place-items-center lg:col-span-2">
            <Image src={microphone.src} alt="" width={90} height={90} />
          </div>
          <p className="lg:col-span-7">
            Все блоки проходятся строго по порядку. Пропустить какой-то блок или
            начать обучение с середины нельзя, даже если вы считаете, что уже
            знаете какую-то часть материала. Только так мы можем гарантировать,
            что вы получите все знания, предусмотренные учебной программой.
          </p>
          <div className="grid place-items-center lg:col-span-3">
            <Button variant="secondary">
              Начать обучение
              <Image src={arrow.src} alt="arrow" width={16} height={16} />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default PricingSection;
