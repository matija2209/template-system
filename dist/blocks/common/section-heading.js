import { jsx as _jsx } from "react/jsx-runtime";
import { twMerge } from "tailwind-merge";
const SectionHeading = ({ children, className }) => {
    return (_jsx("h2", { className: twMerge("font-heading text-3xl font-bold", className), children: children }));
};
export default SectionHeading;
