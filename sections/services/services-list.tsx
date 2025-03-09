import React from 'react';
import { ServicesSectionProps } from '../../types';
import Container from '../../blocks/common/containers/container';
import LeftAlignedHeader from '../../blocks/common/headers/left-aligned-header';
import ServiceCardList from '../../blocks/services/service-card-list';
import Button from '../../blocks/common/buttons/button';

export const ServicesList: React.FC<ServicesSectionProps> = ({
    title,
    subtitle,
    services,
    cta,
    showImages = true,
    showIcons = true,
    showPrices = false,
    className = '',
    headerClassName = '',
    contentClassName = '',
}) => {
    // Prepare services with the right properties
    const preparedServices = services.map(service => ({
        ...service,
        // Only include icon if showIcons is true
        icon: showIcons ? service.icon : undefined,
        // Only include image if showImages is true
        image: showImages ? service.image : undefined,
        // Only include price if showPrices is true
        price: showPrices ? service.price : undefined,
    }));

    return (
        <section className={`py-16 bg-gray-50 ${className}`}>
            <Container>
                <LeftAlignedHeader
                    title={title}
                    subtitle={subtitle}
                    className={headerClassName}
                />

                <ServiceCardList
                    services={preparedServices}
                    variant="horizontal"
                    className={contentClassName}
                />

                {cta && (
                    <div className="mt-12">
                        <Button
                            href={cta.url}
                            variant={cta.variant || 'primary'}
                            size={cta.size || 'md'}
                        >
                            {cta.text}
                        </Button>
                    </div>
                )}
            </Container>
        </section>
    );
};

// Metadata for the template registry
export const metadata = {
    id: 'services-list',
    name: 'Services List',
    description: 'A horizontal list layout of services with a left-aligned header',
    thumbnail: '/thumbnails/services-list.jpg',
    category: 'services' as const,
    blocks: ['left-aligned-header', 'service-card-list', 'button'],
};

export default ServicesList; 