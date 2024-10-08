import React from 'react';
import { HiOutlineShare } from 'react-icons/hi';

interface ShareMessageButtonProps {
    onShare: () => void;
}

const ShareMessageButton: React.FC<ShareMessageButtonProps> = ({ onShare }) => {
    return (
        <HiOutlineShare 
            className="w-6 h-6 text-white hover:text-blue-500 cursor-pointer transition font-bold" 
            onClick={onShare} 
            title="Share Message"
        />
    );
};

export default ShareMessageButton;
