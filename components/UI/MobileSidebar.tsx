import Link from "next/link";

const MobileSidebar = () => {
  return (
    <div className="absolute flex hidden h-screen w-screen justify-end bg-black bg-opacity-70 p-8">
      <div className="rounded-3xl bg-white p-4">
        <button>x</button>
        <div className="flex flex-col">
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
      </div>
    </div>
  );
};

export default MobileSidebar;
