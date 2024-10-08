

// Register.tsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../../components/Button/Button'; // Import the Button component
import data from '../../components/utils/data.json';

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
            id: data.users.length + 1, 
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
            <form onSubmit={handleRegister} className="flex flex-col bg-gray-900 p-8 rounded-3xl shadow-lg w-full max-w-sm border-4 border-gray-900">
                <h2 className="text-3xl font-bold text-white text-center">SIGN UP</h2>
                <p className="text-white text-center">Please enter your details</p>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="p-2 mt-7 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="p-2 mt-7 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <Button label="Sign Up" />
                <div className="flex space-x-2 mt-6">
                    <p className="text-white">Already have an account?</p>
                    <Link to="/login" className="font-bold text-orange-100 transition">Login</Link>
                </div>
            </form>
        </div>
    );
};

export default Register;
