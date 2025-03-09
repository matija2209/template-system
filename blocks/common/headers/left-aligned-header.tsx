import React from 'react';
import { HeaderProps } from '../../../types';

export const LeftAlignedHeader: React.FC<HeaderProps> = ({
    title,
    subtitle,
    className = '',
}) => {
    return (
        <div className={`mb-12 ${className}`}>
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <div className="w-16 h-1 bg-primary mb-4"></div>
            {subtitle && <p className="text-xl text-gray-600 max-w-2xl">{subtitle}</p>}
        </div>
    );
};

export default LeftAlignedHeader; 