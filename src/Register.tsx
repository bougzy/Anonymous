import React, { useState } from 'react'; 
import { useNavigate, Link } from 'react-router-dom'; 
import data from './data.json'; // Adjust the path if necessary

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Check if username already exists
        const existingUser = data.users.find(user => user.username === username);
        if (existingUser) {
            alert('Username already exists. Please choose a different one.');
            return;
        }

        // Create new user
        const newUser = { 
            id: data.users.length + 1, // Increment user id
            username, 
            password, 
            token: 'new_token' 
        };

        // Simulate saving the new user
        data.users.push(newUser);
        alert('Registration successful!');
        navigate('/login');
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
                <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-500 transition duration-200">
                    Register
                </button>
                <div className="flex space-x-2 mt-4">
                    <p className="text-white">Already have an account?</p>
                    <Link to="/login" className="font-bold text-purple-500 transition">Login</Link>
                </div>
            </form>
        </div>
    );
};

export default Register; 
