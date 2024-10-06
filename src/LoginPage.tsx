import  { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [notification, setNotification] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await axios.post('http://localhost:3000/login', { email, password });
            setNotification('Login successful!');
            navigate('/linkmessages'); // Navigate to the chat page
        } catch (err) {
            if (axios.isAxiosError(err) && err.response) {
                setNotification(`Login failed: ${err.response.data.message}`);
            } else {
                setNotification('Login failed: Server error');
            }
            console.error(err);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <h1 className="text-4xl font-bold mb-6">Login</h1>
            {notification && <div className="mb-4 text-green-500">{notification}</div>}
            <div className="bg-dark p-6 rounded shadow-md w-80">
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
                    onClick={handleLogin}
                    className="bg-dark-500 text-white p-2 rounded w-full hover:bg-green-600 transition"
                >
                    Login
                </button>
                <div className="flex space-x-2 text-orange-500">
                    <p>Don't have an account?</p>
                    <Link to="/signup" className="font-bold hover:bg-green-600 transition">Signup</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
