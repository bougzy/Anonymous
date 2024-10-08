import  { useState, useEffect } from 'react';
import AnonymousMessage from '../AnonymousMessage/AnonymousMessage'; // Import the reusable component

const Anonymous = () => {
    const [link, setLink] = useState<string>('');
    const [messages, setMessages] = useState<any[]>([]);

    // Function to generate a link
    const generateLink = () => {
        const newLinkId = `link_${Date.now()}`;
        setLink(newLinkId);
    };

    // Function to add a new message
    const addMessage = (message: string, linkId: string) => {
        const newMessage = { id: messages.length + 1, linkId, message, sender: 'Anonymous' };
        setMessages([...messages, newMessage]);
    };

    // Retrieve messages from localStorage on component mount
    useEffect(() => {
        const storedMessages = JSON.parse(localStorage.getItem('messages') || '[]');
        setMessages(storedMessages);
    }, []);

    return (
        <div className="flex flex-col items-center bg-gray-800 min-h-screen p-8">
            <div className='bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-lg'>
                <h2 className="text-2xl text-white mb-4 text-center">Anonymous Dashboard</h2>
                
                {/* Generate link */}
                <button 
                    onClick={generateLink} 
                    className="bg-orange-600 text-white px-4 py-2 mb-4 rounded block mx-auto"
                >
                    Generate Anonymous Link
                </button>

                {/* Show the reusable component only when the link is generated */}
                {link && (
                    <AnonymousMessage linkId={link} addMessage={addMessage} />
                )}

                {/* Display Messages */}
                <h3 className="text-xl text-white mb-4">Messages:</h3>
                {messages.length > 0 ? (
                    <div className="flex flex-col items-start">
                        {messages.map((msg, index) => (
                            <div key={index} className="bg-gray-700 text-white mb-2 rounded-md flex justify-between items-center w-full max-w-md p-2">
                                <p className="flex-1">{msg.message}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-white">No messages available.</p>
                )}
            </div>
        </div>
    );
};

export default Anonymous;
