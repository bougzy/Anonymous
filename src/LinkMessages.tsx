// // import React, { useState, useEffect } from 'react';
// // import { io } from 'socket.io-client';
// // import CryptoJS from 'crypto-js';
// // import axios from 'axios';
// // import { Link } from 'react-router-dom';

// // const socket = io('http://localhost:3000'); // Update with your backend URL
// // const secretKey = '3Ct1qYTGje'; // Keep this secure in a real app

// // const BASE_URL = 'http://localhost:5173'; // Update when hosting

// // interface Message {
// //     fromUserId: string;
// //     message: string;
// // }

// // const LinkAndMessages: React.FC = () => {
// //     const [roomId, setRoomId] = useState('');
// //     const [link, setLink] = useState('');
// //     const [userId, setUserId] = useState(''); // Set this to the logged-in user's ID
// //     const [messages, setMessages] = useState<Message[]>([]); // To store received messages

// //     // Load messages for the room
// //     useEffect(() => {
// //         if (roomId) {
// //             socket.emit('joinRoom', roomId); // Join room by roomId

// //             // Listen for new messages from the room
// //             socket.on('message', (msg: Message) => {
// //                 const decryptedMessage = CryptoJS.AES.decrypt(msg.message, secretKey).toString(CryptoJS.enc.Utf8);
// //                 setMessages((prevMessages) => [
// //                     ...prevMessages,
// //                     { ...msg, message: decryptedMessage },
// //                 ]);
// //             });

// //             return () => {
// //                 socket.off('message');
// //             };
// //         }
// //     }, [roomId]);

// //     // Function to generate anonymous link
// //     const generateLink = async () => {
// //         try {
// //             const response = await axios.post('http://localhost:3000/generate-anonymous-link', { userId });
// //             const generatedLink = response.data.link;

// //             // Extract roomId from the generated link
// //             const roomId = generatedLink.split('/').pop(); // Modify as per your link structure
// //             setLink(`${BASE_URL}/anonymous/${roomId}`);
// //             setRoomId(roomId); // Set the roomId to listen for messages
// //         } catch (error) {
// //             console.error('Error generating link:', error);
// //         }
// //     };

// //     // Function to copy link to clipboard
// //     const copyToClipboard = async () => {
// //         try {
// //             await navigator.clipboard.writeText(link);
// //             alert('Link copied to clipboard!');
// //         } catch (err) {
// //             console.error('Failed to copy the link: ', err);
// //         }
// //     };

// //     return (
// //         <div className="flex flex-col items-center justify-center min-h-screen bg-black text-orange-500">
// //             <h1 className="text-4xl font-bold mb-6">Anonymous Messaging</h1>
// //             <div className="bg-gray-800 p-6 rounded shadow-md">
// //                 <button
// //                     onClick={generateLink}
// //                     className="bg-purple-500 text-white p-2 rounded mb-4 hover:bg-purple-600 transition"
// //                 >
// //                     Generate Anonymous Link
// //                 </button>
// //                 {link && (
// //                     <div>
// //                         <p className="text-lg mb-4">Share this link:</p>
// //                         <Link to={link} className="text-blue-500 underline">
// //                             {link}
// //                         </Link>
// //                         <button onClick={copyToClipboard} className="bg-green-500 text-white p-2 rounded mt-4">
// //                             Copy to Clipboard
// //                         </button>
// //                     </div>
// //                 )}

// //                 {/* Add a section to display messages */}
// //                 <div className="bg-gray-700 p-4 rounded mt-4 w-96">
// //                     <h3 className="text-lg mb-4">Messages</h3>
// //                     <div className="overflow-y-auto max-h-60">
// //                         {messages.length > 0 ? (
// //                             messages.map((msg, index) => (
// //                                 <div key={index} className="p-2 mb-2 bg-gray-600 rounded">
// //                                     <strong>{msg.fromUserId}: </strong>{msg.message}
// //                                 </div>
// //                             ))
// //                         ) : (
// //                             <p>No messages yet. Share the link to start chatting.</p>
// //                         )}
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default LinkAndMessages;




// import React, { useState, useEffect } from 'react';
// import { io } from 'socket.io-client';
// import CryptoJS from 'crypto-js';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { useMessageContext } from './'; // Assuming you have a MessageContext

// const socket = io('http://localhost:3000'); // Update with your backend URL
// const secretKey = '3Ct1qYTGje'; // Keep this secure in a real app

// const BASE_URL = 'http://localhost:5173'; // Update when hosting

// interface Message {
//     fromUserId: string;
//     message: string;
// }

// const LinkAndMessages: React.FC = () => {
//     const [roomId, setRoomId] = useState('');
//     const [link, setLink] = useState('');
//     const [userId, setUserId] = useState(''); // Set this to the logged-in user's ID
//     const { messages, setMessages } = useMessageContext(); // Get and set messages from context

//     // Load messages for the room
//     useEffect(() => {
//         if (roomId) {
//             socket.emit('joinRoom', roomId); // Join room by roomId

//             // Listen for new messages from the room
//             socket.on('message', (msg: Message) => {
//                 const decryptedMessage = CryptoJS.AES.decrypt(msg.message, secretKey).toString(CryptoJS.enc.Utf8);
//                 setMessages((prevMessages: Message[]) => [
//                     ...prevMessages,
//                     { ...msg, message: decryptedMessage },
//                 ]);
//             });

//             return () => {
//                 socket.off('message');
//             };
//         }
//     }, [roomId, setMessages]);

//     // Function to generate anonymous link
//     const generateLink = async () => {
//         try {
//             const response = await axios.post('http://localhost:3000/generate-anonymous-link', { userId });
//             const generatedLink = response.data.link;

//             // Extract roomId from the generated link
//             const roomId = generatedLink.split('/').pop(); // Modify as per your link structure
//             setLink(`${BASE_URL}/anonymous/${roomId}`);
//             setRoomId(roomId); // Set the roomId to listen for messages
//         } catch (error) {
//             console.error('Error generating link:', error);
//         }
//     };

//     // Function to copy link to clipboard
//     const copyToClipboard = async () => {
//         try {
//             await navigator.clipboard.writeText(link);
//             alert('Link copied to clipboard!');
//         } catch (err) {
//             console.error('Failed to copy the link: ', err);
//         }
//     };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-black text-orange-500">
//             <h1 className="text-4xl font-bold mb-6">Anonymous Messaging</h1>
//             <div className="bg-gray-800 p-6 rounded shadow-md">
//                 <button
//                     onClick={generateLink}
//                     className="bg-purple-500 text-white p-2 rounded mb-4 hover:bg-purple-600 transition"
//                 >
//                     Generate Anonymous Link
//                 </button>
//                 {link && (
//                     <div>
//                         <p className="text-lg mb-4">Share this link:</p>
//                         <Link to={link} className="text-blue-500 underline">
//                             {link}
//                         </Link>
//                         <button onClick={copyToClipboard} className="bg-green-500 text-white p-2 rounded mt-4">
//                             Copy to Clipboard
//                         </button>
//                     </div>
//                 )}

//                 {/* Add a section to display messages */}
//                 <div className="bg-gray-700 p-4 rounded mt-4 w-96">
//                     <h3 className="text-lg mb-4">Messages</h3>
//                     <div className="overflow-y-auto max-h-60">
//                         {messages.length > 0 ? (
//                             messages.map((msg, index) => (
//                                 <div key={index} className="p-2 mb-2 bg-gray-600 rounded">
//                                     <strong>{msg.fromUserId}: </strong>{msg.message}
//                                 </div>
//                             ))
//                         ) : (
//                             <p>No messages yet. Share the link to start chatting.</p>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LinkAndMessages;






// import React, { useState, useEffect } from 'react';
// import { io } from 'socket.io-client';
// import CryptoJS from 'crypto-js';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { useMessageContext } from './MessageContext'; // Importing MessageContext

// const socket = io('http://localhost:3000'); // Update with your backend URL
// const secretKey = '3Ct1qYTGje'; // Keep this secure in a real app

// const BASE_URL = 'http://localhost:5173'; // Update when hosting

// interface Message {
//   fromUserId: string;
//   message: string;
// }

// const LinkAndMessages: React.FC = () => {
//   const [roomId, setRoomId] = useState('');
//   const [link, setLink] = useState('');
//   const [userId, setUserId] = useState(''); // Set this to the logged-in user's ID
//   const { messages, setMessages } = useMessageContext(); // Get and set messages from context

//   // Load messages for the room
//   useEffect(() => {
//     if (roomId) {
//       socket.emit('joinRoom', roomId); // Join room by roomId

//       // Listen for new messages from the room
//       socket.on('message', (msg: Message) => {
//         const decryptedMessage = CryptoJS.AES.decrypt(msg.message, secretKey).toString(CryptoJS.enc.Utf8);
//         setMessages((prevMessages: Message[]) => [
//           ...prevMessages,
//           { ...msg, message: decryptedMessage },
//         ]);
//       });

//       return () => {
//         socket.off('message');
//       };
//     }
//   }, [roomId, setMessages]);

//   // Function to generate anonymous link
//   const generateLink = async () => {
//     try {
//       const response = await axios.post('http://localhost:3000/generate-anonymous-link', { userId });
//       const generatedLink = response.data.link;

//       // Extract roomId from the generated link
//       const roomId = generatedLink.split('/').pop(); // Modify as per your link structure
//       setLink(`${BASE_URL}/anonymous/${roomId}`);
//       setRoomId(roomId); // Set the roomId to listen for messages
//     } catch (error) {
//       console.error('Error generating link:', error);
//     }
//   };

//   // Function to copy link to clipboard
//   const copyToClipboard = async () => {
//     try {
//       await navigator.clipboard.writeText(link);
//       alert('Link copied to clipboard!');
//     } catch (err) {
//       console.error('Failed to copy the link: ', err);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-black text-orange-500">
//       <h1 className="text-4xl font-bold mb-6">Anonymous Messaging</h1>
//       <div className="bg-gray-800 p-6 rounded shadow-md">
//         <button
//           onClick={generateLink}
//           className="bg-purple-500 text-white p-2 rounded mb-4 hover:bg-purple-600 transition"
//         >
//           Generate Anonymous Link
//         </button>
//         {link && (
//           <div>
//             <p className="text-lg mb-4">Share this link:</p>
//             <Link to={link} className="text-blue-500 underline">
//               {link}
//             </Link>
//             <button onClick={copyToClipboard} className="bg-green-500 text-white p-2 rounded mt-4">
//               Copy to Clipboard
//             </button>
//           </div>
//         )}

//         {/* Add a section to display messages */}
//         <div className="bg-gray-700 p-4 rounded mt-4 w-96">
//           <h3 className="text-lg mb-4">Messages</h3>
//           <div className="overflow-y-auto max-h-60">
//             {messages.length > 0 ? (
//               messages.map((msg, index) => (
//                 <div key={index} className="p-2 mb-2 bg-gray-600 rounded">
//                   <strong>{msg.fromUserId}: </strong>{msg.message}
//                 </div>
//               ))
//             ) : (
//               <p>No messages yet. Share the link to start chatting.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LinkAndMessages;



import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import CryptoJS from 'crypto-js';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useMessageContext } from './MessageContext'; // Importing MessageContext

const socket = io('http://localhost:3000'); // Update with your backend URL
const secretKey = '3Ct1qYTGje'; // Keep this secure in a real app

const BASE_URL = 'http://localhost:5173'; // Update when hosting

interface Message {
  fromUserId: string;
  message: string;
}

const LinkAndMessages: React.FC = () => {
  const [roomId, setRoomId] = useState('');
  const [link, setLink] = useState('');
  const { messages, setMessages } = useMessageContext(); // Get and set messages from context

  // Load messages for the room
  useEffect(() => {
    if (roomId) {
      socket.emit('joinRoom', roomId); // Join room by roomId

      // Listen for new messages from the room
      socket.on('message', (msg: Message) => {
        const decryptedMessage = CryptoJS.AES.decrypt(msg.message, secretKey).toString(CryptoJS.enc.Utf8);
        setMessages((prevMessages: Message[]) => [
          ...prevMessages,
          { ...msg, message: decryptedMessage },
        ]);
      });

      return () => {
        socket.off('message');
      };
    }
  }, [roomId, setMessages]);

  // Function to generate anonymous link
  const generateLink = async () => {
    try {
      const response = await axios.post('http://localhost:3000/generate-anonymous-link', {});
      const generatedLink = response.data.link;

      // Extract roomId from the generated link
      const roomId = generatedLink.split('/').pop(); // Modify as per your link structure
      setLink(`${BASE_URL}/anonymous/${roomId}`);
      setRoomId(roomId); // Set the roomId to listen for messages
    } catch (error) {
      console.error('Error generating link:', error);
    }
  };

  // Function to copy link to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(link);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy the link: ', err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-orange-500">
      <h1 className="text-4xl font-bold mb-6">Anonymous Messaging</h1>
      <div className="bg-gray-800 p-6 rounded shadow-md">
        <button
          onClick={generateLink}
          className="bg-purple-500 text-white p-2 rounded mb-4 hover:bg-purple-600 transition"
        >
          Generate Anonymous Link
        </button>
        {link && (
          <div>
            <p className="text-lg mb-4">Share this link:</p>
            <Link to={link} className="text-blue-500 underline">
              {link}
            </Link>
            <button onClick={copyToClipboard} className="bg-green-500 text-white p-2 rounded mt-4">
              Copy to Clipboard
            </button>
          </div>
        )}

        {/* Add a section to display messages */}
        <div className="bg-gray-700 p-4 rounded mt-4 w-96">
          <h3 className="text-lg mb-4">Messages</h3>
          <div className="overflow-y-auto max-h-60">
            {messages.length > 0 ? (
              messages.map((msg, index) => (
                <div key={index} className="p-2 mb-2 bg-gray-600 rounded">
                  <strong>{msg.fromUserId}: </strong>{msg.message}
                </div>
              ))
            ) : (
              <p>No messages yet. Share the link to start chatting.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkAndMessages;
