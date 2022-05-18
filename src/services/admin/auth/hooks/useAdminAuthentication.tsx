import React from 'react';

export const useAdminAuthentication = () => {
    const [adminLoggedIn, setAdminLoggedIn] = React.useState<any>(null);
    const handleAdminSignup = (password: string) => {
        // 1. check password swcurity
        // 2. encrypt password
        // 3. create admin role
        // 4. block request to create second admin
    };
    const handleAdminLogin = (password: string) => {
        // 1. get admin from DB
        // 2. check hash against password
        // 3. handle error
        // 4. login

    };
    return { adminLoggedIn, handleAdminLogin, handleAdminSignup };
};