import { jsx as _jsx } from "react/jsx-runtime";
import getContrastColor from "../../utils/get-contrast-color";
import { twMerge } from "tailwind-merge";
const Spinner = () => {
    const contrast = getContrastColor("black");
    return (_jsx("div", { className: "flex justify-center items-center w-full", children: _jsx("div", { className: twMerge("animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900", `border-${contrast}`) }) }));
};
export default Spinner;
