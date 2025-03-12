import getContrastColor from "../../utils/get-contrast-color";
import { twMerge } from "tailwind-merge";

const Spinner = () => {
  const contrast = getContrastColor("black");
  return (
    <div className="flex justify-center items-center w-full">
      <div
        className={twMerge(
          "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900",
          `border-${contrast}`
        )}
      ></div>
    </div>
  );
};

export default Spinner;
