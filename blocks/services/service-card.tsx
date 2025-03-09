import React from 'react';
import { ServiceCardProps } from '../../types';

export const ServiceCard: React.FC<ServiceCardProps> = ({
    service,
    variant = 'basic',
    className = '',
    ImageComponent,
}) => {
    const { name, description, icon, image, price, cta } = service;
    
    // Default to standard img tag if no ImageComponent is provided
    const ImgComponent = ImageComponent || 'img';

    // Basic card with minimal styling
    if (variant === 'basic') {
        return (
            <div className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${className}`}>
                {icon && (
                    <div className="text-primary text-3xl mb-4">
                        <ImgComponent 
                            src={icon.url} 
                            alt={icon.alt || ''} 
                            className="w-10 h-10" 
                            {...(ImageComponent ? { width: 40, height: 40 } : {})}
                        />
                    </div>
                )}
                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                {description && <p className="text-gray-600 mb-4">{description}</p>}
                {cta && (
                    <a href={cta.link} className="text-primary font-medium hover:underline">
                        {cta.text || 'Learn more'}
                    </a>
                )}
            </div>
        );
    }

    // Detailed card with image
    if (variant === 'detailed') {
        return (
            <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${className}`}>
                {image && (
                    <div className="h-48 overflow-hidden">
                        <ImgComponent
                            src={image.url}
                            alt={image.alt || name}
                            className="w-full h-full object-cover"
                            {...(ImageComponent ? { 
                                width: 800, 
                                height: 400,
                                layout: "responsive",
                                objectFit: "cover"
                            } : {})}
                        />
                    </div>
                )}
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{name}</h3>
                    {description && <p className="text-gray-600 mb-4">{description}</p>}
                    {cta && (
                        <a href={cta.link} className="text-primary font-medium hover:underline">
                            {cta.text || 'Learn more'}
                        </a>
                    )}
                </div>
            </div>
        );
    }

    // Pricing card with price highlighted
    if (variant === 'pricing') {
        return (
            <div className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100 ${className}`}>
                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                {price && (
                    <div className="text-2xl font-bold text-primary mb-4">{price}</div>
                )}
                {description && <p className="text-gray-600 mb-4">{description}</p>}
                {cta && (
                    <a
                        href={cta.link}
                        className="block w-full py-2 px-4 bg-primary text-white text-center rounded-md hover:bg-primary-dark transition-colors"
                    >
                        {cta.text || 'Select'}
                    </a>
                )}
            </div>
        );
    }

    return null;
};

export default ServiceCard; 