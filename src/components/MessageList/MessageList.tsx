import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi2';
import { HiOutlineShare } from 'react-icons/hi';

const MessagesList = ({ messages, setMessages }: { messages: any[], setMessages: any }) => {

    // Function to delete a single message
    const deleteMessage = (index: number) => {
        const updatedMessages = messages.filter((_, i) => i !== index);
        setMessages(updatedMessages);
        localStorage.setItem('messages', JSON.stringify(updatedMessages)); // Update localStorage
    };

    // Function to delete all messages
    const deleteAllMessages = () => {
        setMessages([]); // Clear state
        localStorage.removeItem('messages'); // Remove messages from localStorage
    };

    // Function to share a message
    const shareMessage = (message: string) => {
        if (navigator.share) {
            navigator.share({
                title: 'Shared Message',
                text: message,
                url: window.location.href, // Share the current page URL
            })
            .then(() => console.log('Message shared successfully'))
            .catch((error) => console.error('Error sharing message:', error));
        } else {
            alert('Sharing not supported on this device.');
        }
    };

    return (
        <div>
            {messages.length > 0 ? (
                <div className="flex flex-col items-start">
                    {messages.map((msg, index) => (
                        <div key={index} className="bg-gray-700 text-white mb-2 rounded-md flex justify-between items-center w-full max-w-md p-2">
                            <div className="flex items-center space-x-4 w-full">
                                <p className='flex-1'>{msg.message}</p>
                                <HiOutlineTrash 
                                    className="w-6 h-6 text-white hover:text-red-500 cursor-pointer transition font-bold" 
                                    onClick={() => deleteMessage(index)} 
                                    title="Delete Message"
                                />
                                <HiOutlineShare 
                                    className="w-6 h-6 text-white hover:text-blue-500 cursor-pointer transition font-bold" 
                                    onClick={() => shareMessage(msg.message)} 
                                    title="Share Message"
                                />
                            </div>
                        </div>
                    ))}
                    <button 
                        onClick={deleteAllMessages} 
                        className="bg-red-600 text-white px-4 py-2 mt-4 rounded hover:bg-red-700 transition rounded-tr-lg rounded-bl-lg"
                    >
                        Delete All Messages
                    </button>
                </div>
            ) : (
                <p className="text-white">No messages available.</p>
            )}
        </div>
    );
};

export default MessagesList;
