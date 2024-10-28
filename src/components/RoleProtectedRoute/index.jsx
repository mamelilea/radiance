import { Navigate } from 'react-router-dom';

export const RoleProtectedRoute = ({ children, requiredRole }) => {
    const storedUser = sessionStorage.getItem('user');
    const user = storedUser ? JSON.parse(storedUser) : null;

    if (!user) {
        return <Navigate to="/login" />;
    }

    if (user.role !== requiredRole) {
        return <Navigate to="/upgrade" />;
    }

    return children;
};
