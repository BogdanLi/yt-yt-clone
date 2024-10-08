"use client";

import Image from "next/image";

import logo from "@/assets/logo.svg";
import burger from "@/assets/icons/burger.svg";
import Link from "next/link";
import Container from "./Container";
import { Button, NavLink } from "./Buttons";
import { usePopupStore } from "@/providers/popups-provider";
import arrow from "@/assets/icons/horizontal-arrow.svg";

const links = [
  { title: "Чему вы научитесь", href: "#curriculum" },
  { title: "Процесс обучения", href: "#process" },
  { title: "Стоимость", href: "#pricing" },
  { title: "Контакты", href: "#contacts" },
];

const Header = () => {
  const { showMobileSidebar } = usePopupStore((state) => state);

  return (
    <header>
      <Container className="py-3">
        <div className="flex items-center justify-between rounded-full bg-white px-8 py-3">
          <div className="flex gap-12">
            <Link href="/">
              <Image src={logo.src} alt="logo" width={54} height={20} />
            </Link>
            <div className="hidden gap-10 md:flex">
              {links.map((link) => (
                <NavLink key={link.title} href={link.href}>
                  {link.title}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex">
            <Button variant="tertiary" className="hidden lg:block">
              Регистрация
            </Button>
            <Button variant="primary" className="flex gap-2">
              <Image src={arrow.src} alt="arrow" width={16} height={16} />
              Войти
            </Button>
          </div>
          <div className="md:hidden">
            <Button
              onClick={showMobileSidebar}
              variant="tertiary"
              className="!p-0"
            >
              <Image src={burger.src} alt="menu" width={16} height={16} />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
