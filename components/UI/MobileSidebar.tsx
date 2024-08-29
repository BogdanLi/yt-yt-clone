import Link from "next/link";
import { Button } from "./Buttons";

const MobileSidebar = () => {
  return (
    <div className="fixed flex h-screen w-screen justify-end bg-black bg-opacity-70 p-8">
      <div className="relative flex flex-col justify-between rounded-3xl bg-white p-8 pt-16">
        <button className="absolute right-8 top-8">x</button>
        <div className="flex flex-col space-y-2">
          <Link href={"#curriculum"} className="text-xl font-medium">
            Чему вы научитесь
          </Link>
          <Link href={"#curriculum"} className="text-xl font-medium">
            Процесс обучения
          </Link>
          <Link href={"#curriculum"} className="text-xl font-medium">
            Стоимость
          </Link>
          <Link href={"#curriculum"} className="text-xl font-medium">
            Контакты
          </Link>
          <Link href={"#curriculum"} className="text-xl font-medium">
            Регистрация
          </Link>
        </div>
        <Button>Войти</Button>
      </div>
    </div>
  );
};

export default MobileSidebar;
