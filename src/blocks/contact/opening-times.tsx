import type { DailyOperationHours, OpeningHours } from "@schnellsite/types";
import { twMerge } from "tailwind-merge";

const OpeningTimes = ({ openingHours }: { openingHours?: OpeningHours }) => {
    // Function to translate English day names to German
    const translateDayName = (day: string) => {
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
    }, {} as Record<string, DailyOperationHours>);

    const sortedCompleteOpeningHours = Object.entries(completeOpeningHours).sort(
        ([day1], [day2]) => dayOrder.indexOf(day1) - dayOrder.indexOf(day2)
    );

    return (
        <div>
            {sortedCompleteOpeningHours.map(([day, { isClosed, isOpen24, periods }]: [string, DailyOperationHours]) => {
                const { open, close } = periods && periods[0] ? periods[0] : { open: "", close: "" };
                let displayText;

                if (isOpen24) {
                    displayText = "24 Stunden geöffnet";
                } else if (isClosed) {
                    displayText = "Geschlossen";
                } else if (open === "" || close === "") {
                    displayText = "Geschlossen";
                } else {
                    displayText = `${open} - ${close}`;
                }

                return (
                    <div
                        key={day}
                        className="flex justify-between w-full md:w-1/2 text-white font-light items-center space-x-2"
                    >
                        <span className="capitalize text-white">
                            {translateDayName(day)}:
                        </span>
                        <span className="text-left text-white">
                            {displayText}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default OpeningTimes