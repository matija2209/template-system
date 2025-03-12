import type { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";


interface SectionHeadingProps {
  children: ReactNode;
  className?: string; // '?' makes the className optional
}

const SectionHeading: FC<SectionHeadingProps> = ({ children, className }:{
    children: ReactNode,
    className?: string
}) => {

  return (
    <h2
      className={twMerge(
        "font-heading text-3xl md:text-4xl font-bold pb-12",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
