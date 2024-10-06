

// import React, { useState, useEffect } from 'react';
// import { io } from 'socket.io-client';
// import axios from 'axios';
// import CryptoJS from 'crypto-js';

// const socket = io('http://localhost:3000'); // Update with your backend URL
// const secretKey = '3Ct1qYTGje';

// interface Message {
//     fromUserId: string;
//     message: string;
// }

// const ChatApp = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [token, setToken] = useState('');
//     const [userId, setUserId] = useState('');
//     const [roomId, setRoomId] = useState('');
//     const [message, setMessage] = useState('');
//     const [messages, setMessages] = useState<Message[]>([]);
//     const [notification, setNotification] = useState('');

//     // Register a new user
//     const handleRegister = async () => {
//         try {
//             const res = await axios.post('http://localhost:3000/register', { email, password });
//             setToken(res.data.token);
//             setUserId(res.data.userId);
//             setRoomId(res.data.userId); // Room ID is the user ID
//             setNotification('Registration successful!');
//         } catch (err) {
//             if (axios.isAxiosError(err) && err.response) {
//                 setNotification(`Registration failed: ${err.response.data}`);
//             } else {
//                 setNotification('Registration failed: Server error');
//             }
//             console.error(err);
//         }
//     };

//     // Login an existing user
//     const handleLogin = async () => {
//         try {
//             const res = await axios.post('http://localhost:3000/login', { email, password });
//             setToken(res.data.token);
//             setUserId(res.data.userId);
//             setRoomId(res.data.userId);
//             setNotification('Login successful!');
//         } catch (err) {
//             if (axios.isAxiosError(err) && err.response) {
//                 setNotification(`Login failed: ${err.response.data.message}`);
//             } else {
//                 setNotification('Login failed: Server error');
//             }
//             console.error(err);
//         }
//     };

//     // Join room and load messages
//     useEffect(() => {
//         if (roomId) {
//             socket.emit('joinRoom', roomId);

//             // Fetch existing messages for the room
//             socket.on('loadMessages', (msgs: Message[]) => {
//                 setMessages(msgs);
//             });

//             // Listen for new messages
//             socket.on('message', (msg: Message) => {
//                 setMessages((prevMessages) => [...prevMessages, msg]);
//             });

//             return () => {
//                 socket.off('loadMessages');
//                 socket.off('message');
//             };
//         }
//     }, [roomId]);

//     // Send a message
//     const handleSendMessage = () => {
//         if (message) {
//             const encryptedMessage = CryptoJS.AES.encrypt(message, secretKey).toString();
//             socket.emit('chatMessage', { message: encryptedMessage, roomId, userId });
//             setMessage(''); // Clear the message after sending
//         }
//     };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-black text-orange-500">
//             <h1 className="text-4xl font-bold mb-6">Chat Application</h1>
//             {notification && <div className="mb-4 text-green-500">{notification}</div>}
//             {!token ? (
//                 <div className="bg-gray-800 p-6 rounded shadow-md w-80">
//                     <h2 className="text-2xl mb-4">Register or Login</h2>
//                     <input
//                         type="text"
//                         value={email}
//                         placeholder="Email"
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="border border-gray-600 p-2 rounded mb-4 w-full bg-gray-700 text-orange-500 placeholder-orange-400"
//                     />
//                     <input
//                         type="password"
//                         value={password}
//                         placeholder="Password"
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="border border-gray-600 p-2 rounded mb-4 w-full bg-gray-700 text-orange-500 placeholder-orange-400"
//                     />
//                     <button
//                         onClick={handleRegister}
//                         className="bg-blue-500 text-white p-2 rounded w-full mb-2 hover:bg-blue-600 transition"
//                     >
//                         Register
//                     </button>
//                     <button
//                         onClick={handleLogin}
//                         className="bg-green-500 text-white p-2 rounded w-full hover:bg-green-600 transition"
//                     >
//                         Login
//                     </button>
//                 </div>
//             ) : (
//                 <div className="bg-gray-800 p-6 rounded shadow-md w-80">
//                     <h3 className="text-2xl mb-4">Chat Room</h3>
//                     <div className="overflow-y-auto max-h-60 mb-4">
//                         {messages.map((msg, index) => (
//                             <div key={index} className="bg-gray-700 p-2 rounded mb-2">
//                                 <strong>{msg.fromUserId}: </strong>{msg.message}
//                             </div>
//                         ))}
//                     </div>
//                     <input
//                         type="text"
//                         value={message}
//                         placeholder="Type your message..."
//                         onChange={(e) => setMessage(e.target.value)}
//                         className="border border-gray-600 p-2 rounded w-full bg-gray-700 text-orange-500 placeholder-orange-400"
//                     />
//                     <button
//                         onClick={handleSendMessage}
//                         className="bg-purple-500 text-white p-2 rounded w-full mt-2 hover:bg-purple-600 transition"
//                     >
//                         Send Message
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ChatApp;




import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage'; // Create this component
import SignupPage from './SignupPage'; // Create this component
import LoginPage from './LoginPage'; // Create this component
import ChatApp from './ChatApp'; // Your existing ChatApp component
import LinkMessages from './LinkMessages'
import { MessageProvider } from './MessageContext';
const App = () => {
    return (
        <MessageProvider>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/anonymous/:link" element={<ChatApp />} />
                <Route path="/linkmessages" element={<LinkMessages />} />
            </Routes>
            </MessageProvider>
    );
};

export default App;

