import React from 'react';
import { HeaderProps } from '../../../types';

export const CenteredHeader: React.FC<HeaderProps> = ({
    title,
    subtitle,
    className = '',
}) => {
    return (
        <div className={`text-center mb-12 ${className}`}>
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            {subtitle && <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
    );
};

export default CenteredHeader; 