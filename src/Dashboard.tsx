import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the interface for Message
interface Message {
    _id: string;
    message: string;
    sender: string;
}

const Dashboard: React.FC = () => {
    const [link, setLink] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const token = localStorage.getItem('token');

    // Function to generate a new link
    const generateLink = async () => {
        try {
            const response = await axios.post('https://anony-api.onrender.com/api/link', { token });
            const linkId = response.data.link; // Directly use the linkId
            console.log("Generated Link ID:", linkId);
            setLink(linkId);
        } catch (error) {
            console.error("Error generating link:", error);
            setError("Failed to generate link.");
        }
    };

    // Function to fetch all messages
    const fetchMessages = async () => {
        setLoading(true);
        setError(''); // Reset error before fetching
        try {
            const response = await axios.get<Message[]>('https://anony-api.onrender.com/api/messages');
            console.log(response.data);
            setMessages(response.data);
        } catch (error) {
            console.error("Error fetching messages:", error);
            setError("Failed to fetch messages.");
        } finally {
            setLoading(false);
        }
    };

    // Function to copy the link to clipboard
    const copyToClipboard = () => {
        if (link) {
            navigator.clipboard.writeText(`http://localhost:5173/messages/${link}`);
            alert("Link copied to clipboard!");
        }
    };

    // Fetch messages when the component mounts
    useEffect(() => {
        fetchMessages();
    }, []);

    return (
        <div className=" bg-gray-800">
        <div className="max-w-2xl mx-auto p-4 bg-black text-orange-400 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <button 
                onClick={generateLink} 
                className="mb-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-500 transition duration-200"
            >
                Generate Link
            </button>
            {link && (
                <div className="mb-4">
                    <p>Your link:</p>
                    <a 
                        href={`/messages/${link}`} 
                        className="text-orange-300 hover:underline"
                    >
                        {`http://localhost:5173/messages/${link}`}
                    </a>
                    <button 
                        onClick={copyToClipboard} 
                        className="ml-4 px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-500 transition duration-200"
                    >
                        Copy to Clipboard
                    </button>
                </div>
            )}
            <h3 className="text-xl font-semibold mt-6 mb-2">Messages:</h3>
            {loading ? (
                <p className="text-orange-300">Loading messages...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <div className="space-y-4">
                    {messages.map((msg) => (
                        <div key={msg._id} className="p-4 border rounded-md shadow-sm bg-gray-800 text-orange-400">
                            <p className="font-medium">{msg.sender}:</p>
                            <p>{msg.message}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
        </div>
    );
};

export default Dashboard;
