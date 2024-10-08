// Button.tsx
import React from 'react';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'submit' }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="px-4 py-2 bg-orange-600 text-white rounded-tr-lg rounded-bl-lg hover:bg-orange-500 transition duration-200 mt-14"
        >
            {label}
        </button>
    );
};

export default Button;
