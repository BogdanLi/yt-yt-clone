"use client";

import ModalContainer from "./ModalContainer";
import { Button } from "../Buttons";

import arrow from "@/assets/icons/diagonal-arrow.svg";
import Image from "next/image";

const QuizModal = () => {
  return (
    <ModalContainer>
      <div className="grid place-items-center">
        <h1 className="text-center font-semibold lg:w-2/3 lg:text-2xl lg:font-normal">
          Перед тем, как приступить к обучению, необходимо пройти небольшой тест
        </h1>
        <p className="mt-6 text-center text-xs lg:w-2/3 lg:text-sm">
          Тест состоит из 4 заданий на логическое мышление и прочие навыки,
          необходимые программисту. Задания не самые простые. Но ни в коем
          случае не выбирайте ответы наугад. Если вы не можете дать правильный
          ответ – выбирайте пункт «Не знаю».
        </p>
        <Button variant="secondary" className="mt-5">
          Пройти тест
          <Image src={arrow.src} alt="arrow" width={16} height={16} />
        </Button>
      </div>
    </ModalContainer>
  );
};

export default QuizModal;
