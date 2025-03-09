import React from 'react';
import { ServiceCardListProps } from '../../types';
import { Image } from '@schnellsite/types';
import ServiceCard from './service-card';

export const ServiceCardList: React.FC<ServiceCardListProps> = ({
    services,
    variant = 'basic',
    gap = 'md',
    className = '',
}) => {
    const gapClass = {
        sm: 'space-y-4',
        md: 'space-y-6',
        lg: 'space-y-8',
    }[gap];

    // Vertical list of cards
    if (variant !== 'horizontal') {
        return (
            <div className={`${gapClass} ${className}`}>
                {services.map((service) => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                        variant={variant}
                    />
                ))}
            </div>
        );
    }

    // Helper function to check if icon is a string or Image object
    const isIconString = (icon: string | Image): icon is string => {
        return typeof icon === 'string';
    };

    // Horizontal list with icon/image on left
    return (
        <div className={`${gapClass} ${className}`}>
            {services.map((service) => (
                <div
                    key={service.id}
                    className="flex flex-col md:flex-row gap-6 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                    {service.icon && isIconString(service.icon) && (
                        <div className="text-primary text-4xl flex-shrink-0">
                            <i className={service.icon}></i>
                        </div>
                    )}
                    {service.image && (
                        <div className="w-full md:w-32 h-32 flex-shrink-0 overflow-hidden rounded-md">
                            <img
                                src={service.image.url}
                                alt={service.image.alt || service.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                        {service.description && (
                            <p className="text-gray-600 mb-4">{service.description}</p>
                        )}
                        {service.price && (
                            <div className="font-bold text-primary">{service.price}</div>
                        )}
                        {service.cta && (
                            <a href={service.cta.link} className="text-primary font-medium hover:underline mt-2 inline-block">
                                {service.cta.text}
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServiceCardList; 