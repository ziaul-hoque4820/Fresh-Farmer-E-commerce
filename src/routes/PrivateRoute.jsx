import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({ children }) {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div>Loading...</div>
    };

    if (!user) {
        return <Navigate to="/login" state={location.pathname} />;
    }

    return children;
}

export default PrivateRoute