import React from 'react';
import { ContainerProps } from '../../../types';

export const Container: React.FC<ContainerProps> = ({
    children,
    maxWidth = 'lg',
    padding = 'md',
    className = '',
}) => {
    const maxWidthClass = {
        sm: 'max-w-screen-sm',
        md: 'max-w-screen-md',
        lg: 'max-w-screen-lg',
        xl: 'max-w-screen-xl',
        full: 'max-w-full',
    }[maxWidth];

    const paddingClass = {
        none: 'px-0',
        sm: 'px-4',
        md: 'px-6',
        lg: 'px-8',
    }[padding];

    return (
        <div className={`mx-auto ${maxWidthClass} ${paddingClass} ${className}`}>
            {children}
        </div>
    );
};

export default Container; 