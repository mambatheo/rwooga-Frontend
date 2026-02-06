
import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { authService } from '../services/authService';
import toast from 'react-hot-toast';

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    phone?: string;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    error: string | null;
    login: (credentials: any) => Promise<void>;
    register: (userData: any) => Promise<any>;
    verifyEmail: (email: string, token: string) => Promise<void>;
    logout: () => void;
    clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const login = async (credentials: any) => {
        setLoading(true);
        setError(null);
        try {
            const { data } = await authService.login(credentials);
            console.log('Login response:', data);

            // Validate expected data structure
            if (!data.user || !data.access) {
                throw new Error('Invalid response from server');
            }

            setUser(data.user);
            localStorage.setItem('access_token', data.access);
            localStorage.setItem('refresh_token', data.refresh);
            localStorage.setItem('user', JSON.stringify(data.user));
            toast.success('Logged in successfully!');
        } catch (err: any) {
            console.error('Login error:', err);
            const msg = err.message || 'Login failed';
            setError(msg);
            toast.error(msg);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const register = async (userData: any) => {
        setLoading(true);
        setError(null);
        try {
            const response = await authService.register(userData);
            toast.success('Registration successful! Please check your email.');
            return response;
        } catch (err: any) {
            const msg = err.message || 'Registration failed';
            setError(msg);
            toast.error(msg);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const verifyEmail = useCallback(async (email: string, token: string) => {
        setLoading(true);
        setError(null);
        try {
            await authService.verifyEmail(email, token);
            toast.success('Email verified successfully!');
        } catch (err: any) {
            const message = err.message || 'Verification failed';
            setError(message);
            toast.error(message);
            throw err; // Re-throw to let component know it failed
        } finally {
            setLoading(false);
        }
    }, []);

    const logout = () => {
        setUser(null);
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user');
        toast.success('Successfully logged out');
    };

    const clearError = () => setError(null);

    return (
        <AuthContext.Provider value={{ user, loading, error, login, register, verifyEmail, logout, clearError }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
