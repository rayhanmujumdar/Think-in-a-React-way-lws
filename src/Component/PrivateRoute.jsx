import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from './Hooks/useAuth';

export default function PrivateRoute() {
    const auth = useAuth();
    const location = useLocation();
    return auth === 'true' ? <Outlet /> : <Navigate to="/login" replace state={location} />;
}
