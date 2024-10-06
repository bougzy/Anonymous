import  { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [notification, setNotification] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            await axios.post('http://localhost:3000/register', { email, password });
            setNotification('Registration successful!');
            navigate('/login'); // Navigate to the login page
        } catch (err) {
            if (axios.isAxiosError(err) && err.response) {
                setNotification(`Registration failed: ${err.response.data}`);
            } else {
                setNotification('Registration failed: Server error');
            }
            console.error(err);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-orange-500">
            <h1 className="text-4xl font-bold mb-6">Sign Up</h1>
            {notification && <div className="mb-4 text-white">{notification}</div>}
            <div className="bg-dark-800 p-6 rounded shadow-md w-80">
                <input
                    type="text"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-600 p-2 rounded mb-4 w-full bg-gray-700 text-orange-500 placeholder-orange-400"
                />
                <input
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-600 p-2 rounded mb-4 w-full bg-gray-700 text-orange-500 placeholder-orange-400"
                />
                <button
                    onClick={handleRegister}
                    className="bg-dark text-white p-2 rounded w-full hover:bg-blue-600 transition"
                >
                    Register
                </button>
                <div className="flex space-x-2 ">
                    <p>Already have an account?</p>
                    <Link to="/login" className="font-bold text-orange-500 hover:bg-green-600 transition">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
