import { ReactNode } from "react";

interface NavLinkProps {
  children: ReactNode;
}

export const NavLink = ({ children }: NavLinkProps) => {
  return (
    <button className="text-sm transition-all duration-150 hover:text-secondary">
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
      className={`group rounded-3xl px-4 py-2 transition-all duration-150 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
