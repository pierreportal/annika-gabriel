import React from 'react';
import { hashPassword } from '../../crypto-service';

export const Signup: React.FunctionComponent = () => {

    const [password, setPassword] = React.useState<string>('');

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value)
    };

    const handlePasswordSubmit = (event: any) => {
        event.preventDefault();
        if (password.length < 8) {
            return false;
        }
        const hash = hashPassword(password);
        console.log(hash);
    };

    return <form onSubmit={handlePasswordSubmit}>
        <input type="password" name="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} />
    </form>
};