import React from 'react';
import { ButtonProps } from '../../../types';

export const Button: React.FC<ButtonProps> = ({
    children,
    href,
    onClick,
    variant = 'primary',
    size = 'md',
    className = '',
    fullWidth = false,
    icon,
    iconPosition = 'left',
}) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors';

    const variantClasses = {
        primary: 'bg-primary text-white hover:bg-primary-dark',
        secondary: 'bg-secondary text-white hover:bg-secondary-dark',
        outline: 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-white',
        text: 'bg-transparent text-primary hover:underline',
    }[variant];

    const sizeClasses = {
        sm: 'text-sm py-2 px-4',
        md: 'text-base py-2 px-6',
        lg: 'text-lg py-3 px-8',
    }[size];

    const widthClass = fullWidth ? 'w-full' : '';

    const buttonClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${widthClass} ${className}`;

    const iconElement = icon ? (
        <span className={`${iconPosition === 'left' ? 'mr-2' : 'ml-2'}`}>
            <i className={icon}></i>
        </span>
    ) : null;

    const content = (
        <>
            {icon && iconPosition === 'left' && iconElement}
            {children}
            {icon && iconPosition === 'right' && iconElement}
        </>
    );

    if (href) {
        return (
            <a href={href} className={buttonClasses}>
                {content}
            </a>
        );
    }

    return (
        <button type="button" onClick={onClick} className={buttonClasses}>
            {content}
        </button>
    );
};

export default Button; 