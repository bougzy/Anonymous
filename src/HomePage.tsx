// HomePage.js
import { Link } from 'react-router-dom';
import chatImage from './assets/mask.jpg'; // Update with your image path
import Navbar from './Navbar'; // Import the Navbar component

const HomePage = () => {
    return (
        <>
            <Navbar /> {/* Add the Navbar here */}
            <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-orange-500">
                {/* Left Div with Text and Buttons */}
                <div className="flex flex-col items-start justify-center md:w-1/2 p-6">
                    <h1 className="text-4xl font-bold mb-6">Welcome to the Chat Application</h1>
                    <p className="mb-4">
                        Join us to connect and communicate seamlessly with your friends and family!
                    </p>
                    <div>
                        <Link to="/signup" className="bg-blue-500 text-white p-2 rounded mr-2 hover:bg-blue-600 transition">Send a message</Link>
                        {/* <Link to="/login" className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition">Login</Link> */}
                    </div>
                </div>

                {/* Right Div with Image */}
                <div className="md:w-1/2 flex justify-center md:items-center p-6">
                    <img src={chatImage} alt="Chat Application" className="object-cover w-full h-full rounded-lg" />
                </div>
            </div>
        </>
    );
};

export default HomePage;
