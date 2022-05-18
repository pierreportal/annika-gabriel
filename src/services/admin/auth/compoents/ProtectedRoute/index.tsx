import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface IProtectedRouteProps {
    admin: any,
    redirectPath: string
    children: React.ReactElement
}

export const ProtectedRoute: React.FunctionComponent<IProtectedRouteProps> = ({ admin, redirectPath }) => {
    if (!admin) {
        return <Navigate to={redirectPath} replace />;
    }
    return <Outlet />;
};
