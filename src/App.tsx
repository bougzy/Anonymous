import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import HomePage from './Pages/HomePage/HomePage';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import AnonymousMessage from './components/AnonymousMessage/AnonymousMessage';
import Navbar from './components/Navbar/Navbar'; 

interface Message {
    id: number;
    linkId: string;
    message: string;
    sender: string;
}

const App = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    // Function to add a new message to the state
    const addMessage = (message: string, linkId: string) => {
        const newMessage = {
            id: messages.length + 1,
            linkId,
            message,
            sender: 'Anonymous',
        };
        setMessages([...messages, newMessage]); // Update global message state
    };

    return (
        <>
          <Navbar /> 
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard messages={messages} />} />
                <Route path="/messages/:linkId" element={<AnonymousMessage linkId="xyz123" addMessage={addMessage} />} />
            </Routes>
        </>
    );
};

export default App;
