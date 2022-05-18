import React from 'react';
import { Login } from './auth/compoents/Login';
import { Signup } from './auth/compoents/Signup';
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './auth/compoents/ProtectedRoute';
import { useAdminAuthentication } from './auth/hooks/useAdminAuthentication';

interface IAdminAuthenticationRoutesProps {
    customRoutePrefix: string;
}

const AdminAuthenticationRoutes: React.FunctionComponent<IAdminAuthenticationRoutesProps> = ({ customRoutePrefix }) => {
    const { adminLoggedIn } = useAdminAuthentication();
    return (
        <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
                <ProtectedRoute admin={adminLoggedIn} redirectPath={`${customRoutePrefix}/login`}>
                    <>ADMIN</>
                </ProtectedRoute>
            } />
        </Routes>
    )
};

export { AdminAuthenticationRoutes }