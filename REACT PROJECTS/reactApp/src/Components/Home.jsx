
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
    return (
        <div className="container">
            <h1>Welcome to Our Product Store</h1>
            <h2>Products:</h2>
            <ul>
                <li><Link to="/product/1">Product 1</Link></li>
                <li><Link to="/product/2">Product 2</Link></li>
                <li><Link to="/product/3">Product 3</Link></li>
            </ul>
        </div>
    );
};

export default Home;