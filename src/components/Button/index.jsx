import React from 'react';

export const Button = ({ children, onClick, className = '', type = 'button' }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`rounded-xl text-white font-bold bg-blue ${className}`}
        >
            {children}
        </button>
    );
};