import { Link } from 'react-router-dom';
import chatImage from './assets/mask.jpg'; // Update with your image path

const HomePage = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-orange-100 p-4">
                {/* Left Div with Text and Buttons */}
                <div className="flex flex-col items-start justify-center md:w-1/2 p-4 md:p-6">
                    <h1 className="text-6xl md:text-8xl font-extrabold mb-4 md:mb-6">
                        Send Secret Anonymous Message
                    </h1>
                    <p className="text-lg md:text-xl mb-4">
                        Speak Freely. Stay Anonymous. No one can know who sent it! 
                        Send messages without revealing your identity.
                    </p>
                    <div>
                    <Link  
    to="/register" 
    className="bg-orange-500 text-white w-64 p-3 rounded-tr-xl rounded-bl-xl mr-2 hover:bg-orange-700 transition inline-block text-center"
>
    Let's Get Started
</Link>



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
