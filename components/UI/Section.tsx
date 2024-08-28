import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className, id = "" }: Props) => {
  return (
    <section id={id} className={`py-4 sm:py-8 md:py-12 lg:py-16 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
