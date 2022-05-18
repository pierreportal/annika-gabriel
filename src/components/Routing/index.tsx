import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminAuthenticationRoutes } from '../../services/admin';
import { Home } from '../views/Home';

export const Routing: React.FunctionComponent = () => {

    return <Routes>
        <Route index element={<Home />} />
        <Route path="/secret/*" element={<AdminAuthenticationRoutes customRoutePrefix={'/secret'} />} />
    </Routes>
}