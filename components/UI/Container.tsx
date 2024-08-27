import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: Props) => {
  return (
    <div className={`container mx-auto px-4 sm:px-12 md:px-20 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
