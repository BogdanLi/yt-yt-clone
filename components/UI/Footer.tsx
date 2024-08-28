import Image from "next/image";
import Container from "./Container";
import Section from "./Section";

import logo from "@/assets/logo.svg";
import instagram from "@/assets/icons/instagram.svg";
import vk from "@/assets/icons/vk.svg";
import fb from "@/assets/icons/fb.svg";
import yt from "@/assets/icons/yt.svg";
import { FooterSocialLink } from "./Buttons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <Section>
        <Container>
          <div className="flex flex-col justify-between py-8 lg:flex-row">
            <div>
              <div className="flex gap-4">
                <Image src={logo.src} alt="logo" width={90} height={32} />
                <p className="text-[#8E8E8E]">
                  Школа <br /> программирования
                </p>
              </div>
              <div className="mt-4 flex justify-center gap-2 lg:justify-start">
                <FooterSocialLink
                  width={16}
                  height={16}
                  image={instagram.src}
                />
                <FooterSocialLink width={16} height={16} image={vk.src} />
                <FooterSocialLink width={7} height={16} image={fb.src} />
                <FooterSocialLink width={16} height={16} image={yt.src} />
              </div>
            </div>
            <div className="flex flex-col gap-16 pt-12 text-center lg:flex-row lg:pt-0 lg:text-start">
              <div className="flex flex-col gap-6 text-dark">
                <Link href={""}>Чему вы научитесь</Link>
                <Link href={""}>Процесс обучения</Link>
                <Link href={""}>Стоимость</Link>
                <Link href={""}>Контакты</Link>
                <Link href={""}>Регистрация</Link>
              </div>
              <div className="flex flex-col justify-between gap-12">
                <div className="flex flex-col">
                  <Link
                    href={"tel:+7 (499) 348 93 96"}
                    className="text-primary"
                  >
                    +7 (499) 348 93 96
                  </Link>
                  <Link href={"mailto:info@ytyt.ru"}>info@ytyt.ru</Link>
                </div>
                <div className="text-[#8E8E8E]">
                  <p>ИП Умаров Т. А.</p>
                  <p>ИНН 745216229809</p>
                  <p>ОГРНИП 315745200001358</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-8 border-t border-t-[#D8D8D8] py-8 text-center text-[#8E8E8E] lg:flex-row lg:text-start">
            <p>© {new Date().getUTCFullYear()} ytyt — Все права защищены</p>
            <div className="flex flex-col gap-8 lg:flex-row">
              <p>Пользовательское соглашение</p>
              <p>Политика конфиденциальности</p>
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  );
};

export default Footer;
