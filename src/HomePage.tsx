// // HomePage.js
// import { Link } from 'react-router-dom';
// import chatImage from './assets/mask.jpg'; // Update with your image path
// import Navbar from './Navbar'; // Import the Navbar component

// const HomePage = () => {
//     return (
//         <>
//             <Navbar /> {/* Add the Navbar here */}
//             <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-orange-500">
//                 {/* Left Div with Text and Buttons */}
//                 <div className="flex flex-col items-start justify-center md:w-1/2 p-6">
//                     <h1 className="text-6xl font-bold  mb-6">Welcome to the Chat Application</h1>
//                     <p className="mb-4">
//                         Join us to connect and communicate seamlessly with your friends and family!
//                     </p>
//                     <div>
//                         <Link to="/register" className="bg-purple-600 text-white p-2 rounded mr-2 hover:bg-purple-800 transition">Send a message</Link>
//                         {/* <Link to="/login" className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition">Login</Link> */}
//                     </div>
//                 </div>

//                 {/* Right Div with Image */}
//                 <div className="md:w-1/2 flex justify-center md:items-center p-6">
//                     <img src={chatImage} alt="Chat Application" className="object-cover w-full h-full rounded-lg" />
//                 </div>
//             </div>
//         </>
//     );
// };

// export default HomePage;

import { Link } from 'react-router-dom';
import chatImage from './assets/mask.jpg'; // Update with your image path


const HomePage = () => {
    return (
        <>
           
            <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-orange-500">
                {/* Left Div with Text and Buttons */}
                <div className="flex flex-col items-start justify-center md:w-1/2 p-4 md:p-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">Welcome to the Chat Application</h1>
                    <p className="text-sm md:text-base mb-4">
                        Join us to connect and communicate seamlessly with your friends and family!
                    </p>
                    <div>
                        <Link to="/register" className="bg-purple-600 text-white p-2 rounded mr-2 hover:bg-purple-800 transition">Send a message</Link>
                        {/* <Link to="/login" className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition">Login</Link> */}
                    </div>
                </div>

                {/* Right Div with Image */}
                <div className="md:w-1/2 flex justify-center md:items-center p-4 md:p-6">
                    <img src={chatImage} alt="Chat Application" className="object-cover w-full h-48 md:h-full rounded-lg" />
                </div>
            </div>
        </>
    );
};

export default HomePage;
