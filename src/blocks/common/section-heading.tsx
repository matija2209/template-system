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
        "font-heading text-3xl font-bold",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
