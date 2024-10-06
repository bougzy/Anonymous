// import React, { useState, useEffect } from 'react';
// import { io } from 'socket.io-client';
// import CryptoJS from 'crypto-js';
// import { useParams } from 'react-router-dom'; // Import useParams

// const socket = io('http://localhost:3000'); // Update with your backend URL
// const secretKey = '3Ct1qYTGje'; // Keep this secure in a real app

// interface Message {
//     fromUserId: string;
//     message: string;
// }

// const ChatApp = () => {
//     const { roomId } = useParams(); // Get the roomId from the URL parameters
//     const [userId, setUserId] = useState(''); // User ID must be set elsewhere in your app
//     const [message, setMessage] = useState('');
//     const [messages, setMessages] = useState<Message[]>([]);

//     // Join room and load messages
//     useEffect(() => {
//         if (roomId) {
//             socket.emit('joinRoom', roomId); // Join the correct room

//             // Fetch existing messages for the room
//             socket.on('loadMessages', (msgs: Message[]) => {
//                 setMessages(msgs);
//             });

//             // Listen for new messages
//             socket.on('message', (msg: Message) => {
//                 const decryptedMessage = CryptoJS.AES.decrypt(msg.message, secretKey).toString(CryptoJS.enc.Utf8);
//                 setMessages((prevMessages) => [...prevMessages, { ...msg, message: decryptedMessage }]);
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
//             <h1 className="text-4xl font-bold mb-6">Chat Room</h1>
//             <div className="bg-gray-800 p-6 rounded shadow-md w-80">
//                 <h3 className="text-2xl mb-4">Chat Room</h3>
//                 <div className="overflow-y-auto max-h-60 mb-4">
//                     {messages.map((msg, index) => (
//                         <div key={index} className="bg-gray-700 p-2 rounded mb-2">
//                             <strong>{msg.fromUserId}: </strong>{msg.message}
//                         </div>
//                     ))}
//                 </div>
//                 <input
//                     type="text"
//                     value={message}
//                     placeholder="Type your message..."
//                     onChange={(e) => setMessage(e.target.value)}
//                     className="border border-gray-600 p-2 rounded w-full bg-gray-700 text-orange-500 placeholder-orange-400"
//                 />
//                 <button
//                     onClick={handleSendMessage}
//                     className="bg-purple-500 text-white p-2 rounded w-full mt-2 hover:bg-purple-600 transition"
//                 >
//                     Send Message
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ChatApp;




// import React, { useState } from 'react';
// import { useMessageContext } from './MessageContext';

// const ChatApp: React.FC = () => {
//   const { sendMessage } = useMessageContext(); // Get the sendMessage function from context
//   const [userId, setUserId] = useState(''); // You can set this elsewhere in your app
//   const [message, setMessage] = useState('');

//   // Handle message sending
//   const handleSendMessage = () => {
//     if (message) {
//       sendMessage({ fromUserId: userId, message }); // Send the message through the context
//       setMessage(''); // Clear the message input
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-black text-orange-500">
//       <h1 className="text-4xl font-bold mb-6">Chat Room</h1>
//       <div className="bg-gray-800 p-6 rounded shadow-md w-80">
//         <input
//           type="text"
//           value={message}
//           placeholder="Type your message..."
//           onChange={(e) => setMessage(e.target.value)}
//           className="border border-gray-600 p-2 rounded w-full bg-gray-700 text-orange-500"
//         />
//         <button
//           onClick={handleSendMessage}
//           className="bg-purple-500 text-white p-2 rounded w-full mt-2 hover:bg-purple-600 transition"
//         >
//           Send Message
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatApp;




import React, { useState } from 'react';
import { useMessageContext } from './MessageContext';

const ChatApp: React.FC = () => {
  const { sendMessage } = useMessageContext(); // Get the sendMessage function from context
  const [message, setMessage] = useState('');

  // Handle message sending
  const handleSendMessage = () => {
    if (message) {
      sendMessage({ fromUserId: 'Anonymous', message }); // Send the message through the context
      setMessage(''); // Clear the message input
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-orange-500">
      <h1 className="text-4xl font-bold mb-6">Chat Room</h1>
      <div className="bg-gray-800 p-6 rounded shadow-md w-80">
        <input
          type="text"
          value={message}
          placeholder="Type your message..."
          onChange={(e) => setMessage(e.target.value)}
          className="border border-gray-600 p-2 rounded w-full bg-gray-700 text-orange-500"
        />
        <button
          onClick={handleSendMessage}
          className="bg-purple-500 text-white p-2 rounded w-full mt-2 hover:bg-purple-600 transition"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ChatApp;
