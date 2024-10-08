




import  { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import MessagesList from '../MessageList/MessageList'; // Import the reusable component

const Dashboard = ({ messages }: { messages: any[] }) => {
    const [link, setLink] = useState<string>('');
    const [links, setLinks] = useState<any[]>([]);
    const [storedMessages, setStoredMessages] = useState<any[]>([]); // State to store messages from localStorage

    // Function to generate a link
    const generateLink = () => {
        const newLinkId = `link_${Date.now()}`;
        const newLink = { id: links.length + 1, userId: 1, linkId: newLinkId };
        setLinks([...links, newLink]);
        setLink(newLinkId);
    };

    // Retrieve messages from localStorage on component mount
    useEffect(() => {
        const messagesFromStorage = JSON.parse(localStorage.getItem('messages') || '[]');
        setStoredMessages(messagesFromStorage);
    }, []);

    return (
        <div className="flex flex-col items-center bg-gray-800 min-h-screen p-8">
            <div className='bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-lg'>
                <h2 className="text-2xl text-white mb-4 text-center">Dashboard</h2>
                <button 
                    onClick={generateLink} 
                    className="bg-orange-600 text-white px-4 py-2 mb-4 rounded block mx-auto" // Center button
                >
                    Generate Anonymous Link
                </button>
                {link && (
                    <div className="mb-6 text-center">
                        <p className="text-white">Your link:</p>
                        <div className="flex justify-center items-center">
                            <p className="text-orange-300 mr-2">{`http://localhost:5173/messages/${link}`}</p>
                            <CopyToClipboard text={`http://localhost:5173/messages/${link}`}>
                                <button className="text-white hover:text-orange-500 transition" title="Copy Link">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a4 4 0 00-4-4m-4 4a4 4 0 004 4m4 0a4 4 0 004 4m-8 0H5.5A2.5 2.5 0 013 13.5v-9A2.5 2.5 0 015.5 2H11a4 4 0 014 4v4m-4 4H5.5A2.5 2.5 0 013 13.5v-9" />
                                    </svg>
                                </button>
                            </CopyToClipboard>
                        </div>
                    </div>
                )}

                <h3 className="text-xl text-white mb-4">Messages:</h3>
                
                {/* Pass storedMessages, deleteMessage, deleteAllMessages, and shareMessage as props */}
                <MessagesList 
                    messages={storedMessages}
                    setMessages={setStoredMessages}
                />
            </div>
        </div>
    );
};

export default Dashboard;
