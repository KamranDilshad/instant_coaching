import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isAuthenticated, redirectTo = '/login' }) => {
    return isAuthenticated ? element : <Navigate to={redirectTo} replace />;
};

export default ProtectedRoute;
