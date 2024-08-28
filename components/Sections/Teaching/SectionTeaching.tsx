import Container from "../../UI/Container";
import Section from "../../UI/Section";
import TeachingCard from "./TeachingCard";
import practice from "@/assets/images/practice.svg";
import methods from "@/assets/images/methods.svg";
import pacing from "@/assets/images/pacing.svg";
import schedule from "@/assets/images/schedule.svg";
import connect from "@/assets/images/connect.svg";
import payment from "@/assets/images/payment.svg";
import refund from "@/assets/images/refund.svg";
import Typography from "@/components/UI/Typography";

const cards = [
  {
    id: 1,
    src: practice.src,
    title: "Огромное количество практики",
    description:
      "Более 500 самостоятельных заданий и 20 полноценных больших проектов",
  },
  {
    id: 2,
    src: methods.src,
    title: "Современные методики обучения",
    description:
      "Спиральное обучение: погружаемся в материал постепенно, виток за витком",
  },
  {
    id: 3,
    src: pacing.src,
    title: "Простое и понятное изложение",
    description: "Вместо заумных терминов – примеры из реального мира",
  },
  {
    id: 4,
    src: schedule.src,
    title: "Гибкий график занятий",
    description: "Учитесь в любое время в удобном для вас темпе",
  },
  {
    id: 5,
    src: connect.src,
    title: "Прямая связь с опытными программистами",
    description: "Задавайте вопросы и отправляйте свой код на проверку",
  },
  {
    id: 6,
    src: payment.src,
    title: "Оплата небольшими частями",
    description:
      "Платите только за тот материал, который сейчас изучаете, а не за весь курс сразу",
  },
  {
    id: 7,
    src: refund.src,
    title: "Быстрый и легкий возврат",
    description: "Если передумаете учиться – вернем деньги за 3 рабочих дня",
  },
];

const TeachingSection = () => {
  return (
    <Section className="bg-white">
      <Container className="space-y-4 lg:space-y-12">
        <Typography variant="h1" center>
          Обучение в YtYt – это удобно и результативно
        </Typography>
        <div className="flex flex-wrap justify-center gap-7">
          {cards.map((el) => (
            <TeachingCard {...el} key={el.id} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default TeachingSection;
