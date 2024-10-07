



import React, { useState } from 'react';
import axios from 'axios';

const AnonymousMessage = ({ linkId }: { linkId: string }) => {
    const [message, setMessage] = useState('');

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios.post('https://anony-api.onrender.com/api/messages', { message, linkId });
        alert('Message sent anonymously!');
        setMessage(''); // Clear the message after sending
    };

    return (
        <div className="bg-gray-800">
        <div className="flex items-center justify-center min-h-screen bg-gray-800">
            <div className="max-w-md w-full p-6 bg-gray-900 rounded-lg shadow-lg mt-10">
                <h2 className="text-2xl font-bold text-white mb-4">Send Anonymous Message</h2>
                <form onSubmit={handleSendMessage} className="flex flex-col">
                    <textarea 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        required 
                        className="p-2 mb-4 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                        placeholder="Type your message here..."
                        rows={4}
                    />
                    <button 
                        type="submit" 
                        className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-500 transition duration-200"
                    >
                        Send Anonymous Message
                    </button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default AnonymousMessage;
