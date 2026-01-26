import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, ShieldAlert } from 'lucide-react';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Admin login shortcut for testing/demo
        if (email === 'admin@rwooga.com' && password === 'admin123') {
            localStorage.setItem('rwooga_user', JSON.stringify({ email, role: 'admin', name: 'Admin' }));
            navigate('/admin');
            return;
        }

        const users = JSON.parse(localStorage.getItem('rwooga_users') || '[]');
        const user = users.find((u: any) => u.email === email && u.password === password);

        if (user) {
            localStorage.setItem('rwooga_user', JSON.stringify({ ...user, role: 'user' }));
            navigate('/');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4">
            <div className="max-w-md w-full glass p-8 rounded-3xl border border-gray-100 shadow-xl">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-brand-dark rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                        <LogIn size={32} />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-brand-dark">Welcome Back</h2>
                    <p className="text-gray-500 mt-2">Login to your Rwooga account</p>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl flex items-center space-x-3 text-sm font-medium animate-in fade-in slide-in-from-top-2">
                        <ShieldAlert size={18} />
                        <span>{error}</span>
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-cyan outline-none transition-all"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-cyan outline-none transition-all"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-brand-dark text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg active:scale-[0.98]"
                    >
                        Log In
                    </button>
                </form>

                <div className="mt-8 text-center text-gray-500">
                    <p>Don't have an account? <Link to="/signup" className="text-brand-cyan font-bold hover:underline">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
