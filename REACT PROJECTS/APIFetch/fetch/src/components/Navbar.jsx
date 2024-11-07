import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar">
        <h1>My App</h1>
        <div>
            <Link to="/">Login</Link>
        </div>
    </nav>
);

export default Navbar;
