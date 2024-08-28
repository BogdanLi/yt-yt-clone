import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  children: ReactNode;
  href: string;
}

export const NavLink = ({ children, href }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="text-sm transition-all duration-150 hover:text-secondary"
    >
      {children}
    </Link>
  );
};

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
}

export const Button = ({
  children,
  className = "",
  variant = "primary",
}: ButtonProps) => {
  const variants: { primary: string; secondary: string; tertiary: string } = {
    primary: "bg-primary text-white hover:bg-secondary",
    secondary: "bg-secondary text-white",
    tertiary: "text-dark hover:text-secondary",
  };

  return (
    <button
      className={`group h-fit rounded-3xl px-4 py-2 transition-all duration-150 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

interface FooterSocialLinkProps {
  image: string;
  width: number;
  height: number;
}

export const FooterSocialLink = ({
  image,
  width,
  height,
}: FooterSocialLinkProps) => {
  return (
    <Link
      href={""}
      className="grid aspect-square w-8 place-items-center rounded-full bg-dark hover:bg-secondary"
    >
      <Image src={image} width={width} height={height} alt="" />
    </Link>
  );
};
