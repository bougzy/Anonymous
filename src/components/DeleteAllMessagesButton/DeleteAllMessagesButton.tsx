import React from 'react';

interface DeleteAllMessagesButtonProps {
    onDeleteAll: () => void;
}

const DeleteAllMessagesButton: React.FC<DeleteAllMessagesButtonProps> = ({ onDeleteAll }) => {
    return (
        <button 
            onClick={onDeleteAll} 
            className="bg-red-600 text-white px-4 py-2 mt-4 rounded hover:bg-red-700 transition rounded-tr-lg rounded-bl-lg"
        >
            Delete All Messages
        </button>
    );
};

export default DeleteAllMessagesButton;
