import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../services/authService';
import { AuthContext } from '../context/AuthContext';
import './Register.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();
    const { login } = useContext(AuthContext);

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            const { token } = await registerUser({ email, password });
            login({ email }, token);
            history.push('/');
        } catch (error) {
            setError(error.response ? error.response.data.message : 'Network Error');
        }
    };

    return (
        <div className="register-page">
            <h1>Register</h1>
            <form onSubmit={handleRegister} method="post">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    autoComplete="email"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    autoComplete="new-password"
                />
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    required
                    autoComplete="new-password"
                />
                {error && <p className="error">{error}</p>}
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;