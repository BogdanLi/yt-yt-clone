"use client";

import Link from "next/link";
import { Button } from "./Buttons";
import { usePopupStore } from "@/providers/popups-provider";

const MobileSidebar = () => {
  const { mobileSidebar, closeMobileSidebar } = usePopupStore((state) => state);

  return (
    <div
      className={`fixed flex h-screen w-screen justify-end bg-black bg-opacity-70 p-8 transition-all duration-150 ${mobileSidebar ? "" : "-z-10 opacity-0"}`}
      onClick={closeMobileSidebar}
    >
      <div
        className="relative flex flex-col justify-between rounded-3xl bg-white p-8 pt-16"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute right-8 top-8" onClick={closeMobileSidebar}>
          x
        </button>
        <div className="flex flex-col space-y-2">
          <Link
            onClick={closeMobileSidebar}
            href={"#curriculum"}
            className="text-xl font-medium"
          >
            Чему вы научитесь
          </Link>
          <Link
            onClick={closeMobileSidebar}
            href={"#process"}
            className="text-xl font-medium"
          >
            Процесс обучения
          </Link>
          <Link
            onClick={closeMobileSidebar}
            href={"#pricing"}
            className="text-xl font-medium"
          >
            Стоимость
          </Link>
          <Link
            onClick={closeMobileSidebar}
            href={"#contacts"}
            className="text-xl font-medium"
          >
            Контакты
          </Link>
          <Link
            onClick={closeMobileSidebar}
            href={"//#endregion"}
            className="text-xl font-medium"
          >
            Регистрация
          </Link>
        </div>
        <Button>Войти</Button>
      </div>
    </div>
  );
};

export default MobileSidebar;
