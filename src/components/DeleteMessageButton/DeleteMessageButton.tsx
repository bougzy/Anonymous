


import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi2';

interface DeleteMessageButtonProps {
    onDelete: () => void;
}

const DeleteMessageButton: React.FC<DeleteMessageButtonProps> = ({ onDelete }) => {
    return (
        <HiOutlineTrash 
            className="w-6 h-6 text-white hover:text-red-500 cursor-pointer transition font-bold" 
            onClick={onDelete} 
            title="Delete Message"
        />
    );
};

export default DeleteMessageButton;
