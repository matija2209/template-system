import React from 'react';
import { ServiceCardGridProps } from '../../types';
import ServiceCard from './service-card';

export const ServiceCardGrid: React.FC<ServiceCardGridProps> = ({
    services,
    columns = 3,
    gap = 'md',
    variant = 'basic',
    className = '',
}) => {
    const columnsClass = {
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    }[columns];

    const gapClass = {
        sm: 'gap-4',
        md: 'gap-6',
        lg: 'gap-8',
    }[gap];

    return (
        <div className={`grid ${columnsClass} ${gapClass} ${className}`}>
            {services.map((service) => (
                <ServiceCard
                    key={service.id}
                    service={service}
                    variant={variant}
                />
            ))}
        </div>
    );
};

export default ServiceCardGrid; 