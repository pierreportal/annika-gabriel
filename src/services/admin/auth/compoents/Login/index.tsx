import React from 'react';
import { compareHash } from '../../crypto-service';

export const Login: React.FunctionComponent = () => {

    const [password, setPassword] = React.useState<string>('');

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value)
    };

    const handlePasswordSubmit = (event: any) => {
        event.preventDefault();
        if (password.length < 8) {
            return false;
        }
        const isMatch = compareHash(password, '');
        console.log(isMatch);
    };

    return <form onSubmit={handlePasswordSubmit}>
        <input type="password" name="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} />
    </form>
};