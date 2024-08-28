import { ReactNode } from "react";

type TextType = "h1" | "h2" | "h3";

interface Props {
  children: ReactNode;
  variant?: TextType;
  className?: string;
  center?: boolean;
}

const types: { h1: string; h2: string; h3: string } = {
  h1: "font-semibold text-2xl lg:text-[46px] my-6",
  h2: "",
  h3: "",
};

const Typography = ({
  children,
  variant = "h1",
  className = "",
  center = false,
}: Props) => {
  return (
    <p
      className={`leading-none ${types[variant]} ${center ? "text-center" : ""} ${className}`}
    >
      {children}
    </p>
  );
};

export default Typography;
