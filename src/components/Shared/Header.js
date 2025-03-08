import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, logout } = useContext(AuthContext);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <Link to="/" className="logo">Budget Manager</Link>
            <nav>
                <ul className={menuOpen ? 'active' : ''}>
                    {user ? (
                        <li className="dropdown">
                            <span className="dropdown-toggle" onClick={toggleMenu}>
                                <i className="fas fa-chevron-down"></i>
                            </span>
                            <div className={`dropdown-menu ${menuOpen ? 'show' : ''}`}>
                                <Link to="/" onClick={toggleMenu}>Home</Link>
                                <Link to="/personal" onClick={toggleMenu}>Personal Finance</Link>
                                <Link to="/business" onClick={toggleMenu}>Business Finance</Link>
                                <span onClick={logout}>Log Out</span>
                            </div>
                        </li>
                    ) : (
                        <>
                            <li><Link to="/login" onClick={toggleMenu}>Login</Link></li>
                            <li><Link to="/register" onClick={toggleMenu}>Register</Link></li>
                        </>
                    )}
                </ul>
            </nav>
            <div className="menu-toggle" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
};

export default Header;