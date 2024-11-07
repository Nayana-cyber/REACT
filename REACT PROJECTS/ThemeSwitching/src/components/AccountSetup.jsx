import React, { useContext, useState } from 'react';
import { AppContext } from './AppContext';

const AccountSetup = () => {
    const { formData, setFormData } = useContext(AppContext);
    const [passwordStrength, setPasswordStrength] = useState('');

    const validatePassword = (password) => {
        if (password.length >= 8) {
            setPasswordStrength('strong');
        } else {
            setPasswordStrength('weak');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === 'password') validatePassword(value);
    };

    return (
        <div>
            <h2>Account Setup</h2>
            <input 
                type="text" 
                name="username" 
                placeholder="Username" 
                value={formData.username}
                onChange={handleChange} 
            />
            <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={formData.email}
                onChange={handleChange} 
            />
            <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={formData.password}
                onChange={handleChange} 
            />
            <span>Password Strength: {passwordStrength}</span>
            <input 
                type="password" 
                name="confirmPassword" 
                placeholder="Confirm Password" 
                value={formData.confirmPassword}
                onChange={handleChange} 
            />
        </div>
    );
};

export default AccountSetup;
