import Image from "next/image";

import logo from "@/assets/logo.svg";
import burger from "@/assets/icons/burger.svg";
import Link from "next/link";
import Container from "./Container";
import { Button, NavLink } from "./Buttons";

const links: string[] = [
  "Чему вы научитесь",
  "Процесс обучения",
  "Стоимость",
  "Контакты",
];

const Header = () => {
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
                <NavLink key={link}>{link}</NavLink>
              ))}
            </div>
          </div>
          <div className="flex">
            <Button variant="tertiary" className="hidden lg:block">
              Регистрация
            </Button>
            <Button variant="primary">Войти</Button>
          </div>
          <div className="md:hidden">
            <Button variant="tertiary" className="!p-0">
              <Image src={burger.src} alt="menu" width={16} height={16} />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
