import { ReactNode } from "react";

interface NavLinkProps {
  children: ReactNode;
}

export const NavLink = ({ children }: NavLinkProps) => {
  return (
    <button className="text-sm hover:text-secondary transition-all duration-150">
      {children}
    </button>
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
      className={`group transition-all duration-150 py-2 px-4 rounded-3xl ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
