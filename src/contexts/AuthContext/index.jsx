import React, { useState, useContext, createContext, useEffect } from 'react';
import { Alert } from '@/components/Alert';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = sessionStorage.getItem('user');
        if (storedUser) {
            const userData = JSON.parse(storedUser);
            setUser(userData);
        }
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setError(null), 3000);
        return () => clearTimeout(timer);
    }, [error]);

    const showError = (message) => {
        setError(message);
        Alert.showError(message);
    };

    const checkUserExists = (email) => {
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        return existingUsers.some((user) => user.email === email);
    };

    const handleRegister = async (data) => {
        try {
            if (checkUserExists(data.email)) {
                showError('User with this email already exists. Please login.');
            } else {
                const newUser = { ...data, role: 'free' };
                const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
                existingUsers.push(newUser);
                localStorage.setItem('users', JSON.stringify(existingUsers));
                sessionStorage.setItem('user', JSON.stringify(newUser));
                setUser(newUser);
                Alert.showSuccess('Register successful!');
                navigate('/');
            }
        } catch (err) {
            showError('Register failed');
        }
    };

    const handleLogin = (data) => {
        try {
            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
            const foundUser = existingUsers.find(
                (user) => user.email.toLowerCase() === data.email.toLowerCase() && user.password === data.password
            );

            if (foundUser) {
                sessionStorage.setItem('user', JSON.stringify(foundUser));
                setUser(foundUser);
                setError(null);
                Alert.showSuccess('Login successful!');
                navigate('/');
            } else {
                showError('Invalid email or password');
            }
        } catch (err) {
            showError('Login failed');
        }
    };

    const logout = () => {
        sessionStorage.removeItem('user');
        setUser(null);
        Alert.showSuccess('Logout successful!');
        navigate('/login');
    };

    const upgradeToPremium = () => {
        const updatedUser = { ...user, role: 'premium' };
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        const userIndex = existingUsers.findIndex((u) => u.email === user.email);
        if (userIndex !== -1) {
            existingUsers[userIndex] = updatedUser;
            localStorage.setItem('users', JSON.stringify(existingUsers));
            sessionStorage.setItem('user', JSON.stringify(updatedUser));
            setUser(updatedUser);
            Alert.showSuccess('Upgraded to Premium!');
        } else {
            console.error('User not found');
        }
    };


    return (
        <AuthContext.Provider value={{ user, handleLogin, handleRegister, logout, upgradeToPremium, error }}>
            {children}
        </AuthContext.Provider>
    );
};