import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { twMerge } from "tailwind-merge";
const OpeningTimes = ({ openingHours }) => {
    // Function to translate English day names to German
    const translateDayName = (day) => {
        switch (day.toLowerCase()) {
            case "monday":
                return "Montag";
            case "tuesday":
                return "Dienstag";
            case "wednesday":
                return "Mittwoch";
            case "thursday":
                return "Donnerstag";
            case "friday":
                return "Freitag";
            case "saturday":
                return "Samstag";
            case "sunday":
                return "Sonntag";
            default:
                return day;
        }
    };
    const dayOrder = [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
    ];
    const completeOpeningHours = dayOrder.reduce((acc, day) => {
        // @ts-ignore
        acc[day] = openingHours?.[day] || { isClosed: true, isOpen24: false, periods: [] };
        return acc;
    }, {});
    const sortedCompleteOpeningHours = Object.entries(completeOpeningHours).sort(([day1], [day2]) => dayOrder.indexOf(day1) - dayOrder.indexOf(day2));
    return (_jsx("div", { children: sortedCompleteOpeningHours.map(([day, { isClosed, isOpen24, periods }]) => {
            const { open, close } = periods && periods[0] ? periods[0] : { open: "", close: "" };
            let displayText;
            if (isOpen24) {
                displayText = "24 Stunden geöffnet";
            }
            else if (isClosed) {
                displayText = "Geschlossen";
            }
            else if (open === "" || close === "") {
                displayText = "Geschlossen";
            }
            else {
                displayText = `${open} - ${close}`;
            }
            return (_jsxs("div", { className: "flex justify-between w-full md:w-1/2 text-white font-light items-center space-x-2", children: [_jsxs("span", { className: "capitalize text-white", children: [translateDayName(day), ":"] }), _jsx("span", { className: "text-left text-white", children: displayText })] }, day));
        }) }));
};
export default OpeningTimes;
