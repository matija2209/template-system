import React from 'react';
import { ServicesSectionProps } from '../../types';
import Container from '../../blocks/common/containers/container';
import CenteredHeader from '../../blocks/common/headers/centered-header';
import ServiceCardGrid from '../../blocks/services/service-card-grid';
import Button from '../../blocks/common/buttons/button';

export const ServicesGrid: React.FC<ServicesSectionProps> = ({
    title,
    subtitle,
    services,
    cta,
    columns = 3,
    showImages = false,
    showIcons = true,
    showPrices = false,
    className = '',
    headerClassName = '',
    contentClassName = '',
}) => {
    // Determine the variant based on what to show
    let variant: 'basic' | 'detailed' | 'pricing' = 'basic';
    if (showPrices) {
        variant = 'pricing';
    } else if (showImages) {
        variant = 'detailed';
    }

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
        <section className={`py-16 ${className}`}>
            <Container>
                <CenteredHeader
                    title={title}
                    subtitle={subtitle}
                    className={headerClassName}
                />

                <ServiceCardGrid
                    services={preparedServices}
                    columns={columns}
                    variant={variant}
                    className={contentClassName}
                />

                {cta && (
                    <div className="mt-12 text-center">
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
    id: 'services-grid',
    name: 'Services Grid',
    description: 'A grid layout of service cards with a centered header',
    thumbnail: '/thumbnails/services-grid.jpg',
    category: 'services' as const,
    blocks: ['centered-header', 'service-card-grid', 'button'],
};

export default ServicesGrid; 