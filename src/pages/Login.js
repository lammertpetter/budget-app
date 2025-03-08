import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../services/authService';
import { AuthContext } from '../context/AuthContext';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();
    const { login } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { token } = await loginUser({ email, password });
            login({ email }, token);
            history.push('/');
        } catch (error) {
            setError(error.response ? error.response.data.message : 'Network Error');
        }
    };

    return (
        <div className="login-page">
            <h1>Login</h1>
            <form onSubmit={handleLogin} method="post">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                {error && <p className="error">{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;