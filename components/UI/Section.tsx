import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Section = ({ children, className }: Props) => {
  return (
    <section className={`py-4 sm:py-8 md:py-12 lg:py-16 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
