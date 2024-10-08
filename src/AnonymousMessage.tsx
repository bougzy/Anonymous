import React, { useState } from 'react';

interface AnonymousMessageProps {
    linkId: string;
    addMessage: (message: string, linkId: string) => void;
}

const AnonymousMessage: React.FC<AnonymousMessageProps> = ({ linkId, addMessage }) => {
    const [message, setMessage] = useState('');

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!message) return;

        // Call the parent's addMessage function to update the global message state
        addMessage(message, linkId);

        // Save message to localStorage
        const storedMessages = JSON.parse(localStorage.getItem('messages') || '[]');
        const newMessage = { id: storedMessages.length + 1, linkId, message, sender: 'Anonymous' };
        localStorage.setItem('messages', JSON.stringify([...storedMessages, newMessage]));

        alert('Message sent anonymously!');
        setMessage(''); // Clear the input field after sending
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-800">
            <div className="max-w-md w-full p-6 bg-gray-900 rounded-lg shadow-lg mt-10">
                <h2 className="text-2xl font-bold text-white mb-4">Send Anonymous Message</h2>
                <form onSubmit={handleSendMessage} className="flex flex-col">
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="p-2 mb-4 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                        placeholder="Type your anonymous message here..."
                    />
                    <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-500 transition duration-200">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AnonymousMessage;
