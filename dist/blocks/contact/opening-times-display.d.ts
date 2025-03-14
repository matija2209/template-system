import React from 'react';
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
declare const OpeningTimesDisplay: React.FC<OpeningTimesDisplayProps>;
export default OpeningTimesDisplay;
