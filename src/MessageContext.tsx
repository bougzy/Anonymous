// import React, { createContext, useContext, useState, ReactNode } from 'react';

// // Define the structure for the messages and the context functions
// interface Message {
//   fromUserId: string;
//   message: string;
// }

// interface MessageContextType {
//   messages: Message[];
//   sendMessage: (message: Message) => void;
// }

// // Create the context
// const MessageContext = createContext<MessageContextType | undefined>(undefined);

// // Create a provider component
// export const MessageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [messages, setMessages] = useState<Message[]>([]);

//   const sendMessage = (message: Message) => {
//     setMessages((prevMessages) => [...prevMessages, message]);
//   };

//   return (
//     <MessageContext.Provider value={{ messages, sendMessage }}>
//       {children}
//     </MessageContext.Provider>
//   );
// };

// // Custom hook to use the MessageContext
// export const useMessageContext = () => {
//   const context = useContext(MessageContext);
//   if (!context) {
//     throw new Error('useMessageContext must be used within a MessageProvider');
//   }
//   return context;
// };




import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the structure for the messages and the context functions
interface Message {
  fromUserId: string;
  message: string;
}

interface MessageContextType {
  messages: Message[];
  sendMessage: (message: Message) => void;
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>; // Add setMessages here
}

// Create the context
const MessageContext = createContext<MessageContextType | undefined>(undefined);

// Create a provider component
export const MessageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = (message: Message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <MessageContext.Provider value={{ messages, sendMessage, setMessages }}>
      {children}
    </MessageContext.Provider>
  );
};

// Custom hook to use the MessageContext
export const useMessageContext = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error('useMessageContext must be used within a MessageProvider');
  }
  return context;
};
