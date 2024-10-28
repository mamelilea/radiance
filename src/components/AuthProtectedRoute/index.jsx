import { Navigate } from 'react-router-dom';

export const AuthProtectedRoute = ({ children }) => {
    const storedUser = sessionStorage.getItem('user');
    const user = storedUser ? JSON.parse(storedUser) : null;

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
};
