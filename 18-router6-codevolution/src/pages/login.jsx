import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './auth';

const Login = () => {
    const [user, setUser] = useState('');
    const auth = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const redirectpath = location.state?.path || '/';

    const handleLogin = () => {
        auth.login(user);
        navigate(redirectpath, { replace: true });
    };

    return (
        <>
            <h2>Login</h2>
            <br />
            <label>
                UserName:{' '}
                <input type="text" onChange={(e) => setUser(e.target.value)} />
            </label>
            <br />
            <button onClick={handleLogin}>Login</button>
        </>
    );
};

export default Login;
