import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
    return (
        <div className={`w-full h-auto bg-white p-8 shadow-lg rounded-lg ${className}`}>
            {children}
        </div>
    );
};

export default Card;
