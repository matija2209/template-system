import React from 'react';
import { Clock, AlertCircle } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface OpeningTimesDisplayProps {
    openingTimes: any;
    openingTimesCustom?: {
        active?: boolean;
        message?: string;
    };
    className?: string;
    titleClassName?: string;
    messageClassName?: string;
    dayClassName?: string;
    timeClassName?: string;
    title?: string;
}

const OpeningTimesDisplay: React.FC<OpeningTimesDisplayProps> = ({
    openingTimes,
    openingTimesCustom,
    className,
    titleClassName,
    messageClassName,
    dayClassName,
    timeClassName,
    title = "Öffnungszeiten"
}) => {
    // Helper function to format day names to German
    const formatDay = (day: string): string => {
        // Translate day names to German
        const germanDays: Record<string, string> = {
            monday: "Montag",
            tuesday: "Dienstag",
            wednesday: "Mittwoch",
            thursday: "Donnerstag",
            friday: "Freitag",
            saturday: "Samstag",
            sunday: "Sonntag"
        };

        return germanDays[day.toLowerCase()] || day.charAt(0).toUpperCase() + day.slice(1);
    };

    // Helper function to format time ranges
    const formatTimeRange = (from: string, to: string): string => {
        return `${from} - ${to}`;
    };

    // Helper function to format periods
    const formatPeriods = (periods: Array<{ open: string, close: string }>): string => {
        if (!periods || periods.length === 0) return "Geschlossen";

        return periods.map(period => {
            return `${period.open} - ${period.close}`;
        }).join(", ");
    };

    if (!openingTimes || Object.keys(openingTimes).length === 0) {
        return null;
    }

    return (
        <div className={twMerge("mt-6", className)}>
            <div className="flex items-center mb-4">
                <Clock className="h-5 w-5 mr-2" />
                <h3 className={twMerge("text-lg font-medium", titleClassName)}>{title}</h3>
            </div>

            {openingTimesCustom?.active && openingTimesCustom.message && (
                <div className={twMerge("flex p-3 mb-4 bg-primary-foreground/10 border-l-4 border-primary-foreground/30 rounded", messageClassName)}>
                    <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    <p className="text-sm">{openingTimesCustom.message}</p>
                </div>
            )}

            <div className="space-y-2">
                {/* Ensure days are displayed in order starting with Monday */}
                {(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as const)
                    .filter(day => openingTimes && openingTimes[day])
                    .map(day => {
                        const dayData = openingTimes[day];
                        if (!dayData) return null;

                        // Check if we're using the new format with periods and isClosed
                        const hasNewFormat = 'periods' in dayData || 'isClosed' in dayData;

                        if (hasNewFormat) {
                            // New format with periods and isClosed
                            return (
                                <div key={day} className="flex justify-between text-sm">
                                    <span className={twMerge("font-medium", dayClassName)}>{formatDay(day)}</span>
                                    <span className={twMerge(
                                        dayData.isClosed ? "text-black openingtimes-closed" : "",
                                        timeClassName
                                    )}>
                                        {dayData.isClosed
                                            ? "Geschlossen"
                                            : formatPeriods(dayData.periods || [])
                                        }
                                    </span>
                                </div>
                            );
                        } else {
                            // Legacy format with from, to, and closed properties
                            const legacyData = dayData as any; // Type assertion for legacy format
                            return (
                                <div key={day} className="flex justify-between text-sm">
                                    <span className={twMerge("font-medium", dayClassName)}>{formatDay(day)}</span>
                                    <span className={twMerge(
                                        legacyData.closed ? "text-black openingtimes-closed" : "",
                                        timeClassName
                                    )}>
                                        {legacyData.closed
                                            ? "Geschlossen"
                                            : formatTimeRange(legacyData.from, legacyData.to)
                                        }
                                    </span>
                                </div>
                            );
                        }
                    })}
            </div>
        </div>
    );
};

export default OpeningTimesDisplay; 