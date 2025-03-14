import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Clock, AlertCircle } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
const OpeningTimesDisplay = ({ openingTimes, openingTimesCustom, className, titleClassName, messageClassName, dayClassName, timeClassName, title = "Öffnungszeiten" }) => {
    // Helper function to format day names to German
    const formatDay = (day) => {
        // Translate day names to German
        const germanDays = {
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
    const formatTimeRange = (from, to) => {
        return `${from} - ${to}`;
    };
    // Helper function to format periods
    const formatPeriods = (periods) => {
        if (!periods || periods.length === 0)
            return "Geschlossen";
        return periods.map(period => {
            return `${period.open} - ${period.close}`;
        }).join(", ");
    };
    if (!openingTimes || Object.keys(openingTimes).length === 0) {
        return null;
    }
    return (_jsxs("div", { className: twMerge("mt-6", className), children: [_jsxs("div", { className: "flex items-center mb-4", children: [_jsx(Clock, { className: "h-5 w-5 mr-2" }), _jsx("h3", { className: twMerge("text-lg font-medium", titleClassName), children: title })] }), openingTimesCustom?.active && openingTimesCustom.message && (_jsxs("div", { className: twMerge("flex p-3 mb-4 bg-primary-foreground/10 border-l-4 border-primary-foreground/30 rounded", messageClassName), children: [_jsx(AlertCircle, { className: "h-5 w-5 mr-2 flex-shrink-0" }), _jsx("p", { className: "text-sm", children: openingTimesCustom.message })] })), _jsx("div", { className: "space-y-2", children: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
                    .filter(day => openingTimes && openingTimes[day])
                    .map(day => {
                    const dayData = openingTimes[day];
                    if (!dayData)
                        return null;
                    // Check if we're using the new format with periods and isClosed
                    const hasNewFormat = 'periods' in dayData || 'isClosed' in dayData;
                    if (hasNewFormat) {
                        // New format with periods and isClosed
                        return (_jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { className: twMerge("font-medium", dayClassName), children: formatDay(day) }), _jsx("span", { className: twMerge(dayData.isClosed ? "text-primary-foreground/60" : "text-primary-foreground", timeClassName), children: dayData.isClosed
                                        ? "Geschlossen"
                                        : formatPeriods(dayData.periods || []) })] }, day));
                    }
                    else {
                        // Legacy format with from, to, and closed properties
                        const legacyData = dayData; // Type assertion for legacy format
                        return (_jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { className: twMerge("font-medium", dayClassName), children: formatDay(day) }), _jsx("span", { className: twMerge(legacyData.closed ? "text-primary-foreground/60" : "text-primary-foreground", timeClassName), children: legacyData.closed
                                        ? "Geschlossen"
                                        : formatTimeRange(legacyData.from, legacyData.to) })] }, day));
                    }
                }) })] }));
};
export default OpeningTimesDisplay;
