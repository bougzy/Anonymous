

// Login.tsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../../components/Button/Button'; // Import the Button component
import data from '../../components/utils/data.json';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // Find the user in the local data
        const user = data.users.find((u: any) => u.username === username && u.password === password);
        
        if (user) {
            // Save the token in local storage
            localStorage.setItem('token', user.token);
            alert('Login successful!');
            navigate('/dashboard');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-800">
            <form onSubmit={handleLogin} className="flex flex-col bg-gray-900 p-8 rounded-3xl shadow-lg w-full max-w-sm border-4 border-gray-900">
                <h2 className="text-3xl font-bold text-white text-center">LOGIN</h2>
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
                <Button label="Login" />
                <div className="flex space-x-2 mt-6">
                    <p className="text-white">Don't have an account?</p>
                    <Link to="/register" className="font-bold text-orange-100 transition">Register</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
