

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('https://anony-api.onrender.com/api/register', { username, password });
            alert('Registration successful!');
            navigate('/login'); // Navigate to the login component
        } catch (error: any) {
            console.error("Error registering user:", error.response ? error.response.data : error);
            alert('Registration failed. Please try again.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-800">
            <form onSubmit={handleRegister} className="flex flex-col bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Register</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="p-2 mb-4 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="p-2 mb-4 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <button 
                    type="submit" 
                    className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-500 transition duration-200"
                >
                    Register
                </button>
                <div className="flex space-x-2">
                    <p className="text-white mt-3">Already have an account?</p>
                    <Link to="/login" className="font-bold text-purple-500 transition mt-3">Login</Link>
                </div>
            </form>
        </div>
    );
};

export default Register;
