import React, { useState } from 'react';
import './MultiStepForm.css';

const countries = [
    { code: 'US', name: 'United States', flag: 'https://flagcdn.com/us.svg' },
    { code: 'CA', name: 'Canada', flag: 'https://flagcdn.com/ca.svg' },
    { code: 'GB', name: 'United Kingdom', flag: 'https://flagcdn.com/gb.svg' },
    // Add more countries as needed
];

const passwordStrength = (password) => {
    const strength = password.length >= 8 ? 1 : 0;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
};

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [fullName, setFullName] = useState('');
    const [dob, setDob] = useState('');
    const [country, setCountry] = useState('');
    const [countryFlag, setCountryFlag] = useState('');

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleCountryChange = (e) => {
        const selectedCountry = countries.find(c => c.code === e.target.value);
        setCountry(e.target.value);
        setCountryFlag(selectedCountry ? selectedCountry.flag : '');
    };

    const handleUsernameChange = (e) => {
        const value = e.target.value;
        // Validate username: alphanumeric and 5-15 characters
        if (/^[a-zA-Z0-9]{0,15}$/.test(value) && value.length >= 5) {
            setUsername(value);
        } else {
            setUsername(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (step === 2) {
            console.log('Account Setup:', { username, email, password });
            // Add form submission logic here
        }
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    return (
        <div className="form-container">
            {step === 1 && (
                <div>
                    <h2>Step 1: Personal Information</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="fullName">Full Name:</label>
                            <input
                                type="text"
                                id="fullName"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="dob">Date of Birth:</label>
                            <input
                                type="date"
                                id="dob"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="country">Country:</label>
                            <div className="country-dropdown">
                                <img
                                    src={countryFlag}
                                    alt="Country Flag"
                                    style={{ display: countryFlag ? 'inline' : 'none', width: '30px', marginRight: '10px' }}
                                />
                                <select id="country" value={country} onChange={handleCountryChange} required>
                                    <option value="">Select a country</option>
                                    {countries.map((country) => (
                                        <option key={country.code} value={country.code}>
                                            {country.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <button type="button" onClick={nextStep}>Next</button>
                    </form>
                </div>
            )}

            {step === 2 && (
                <div>
                    <h2>Step 2: Account Setup</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={handleUsernameChange}
                                required
                            />
                            {username && (
                                <div>
                                    {username.length < 5 && <span className="error">Username must be at least 5 characters.</span>}
                                    {username.length > 15 && <span className="error">Username must be no more than 15 characters.</span>}
                                    {!/^[a-zA-Z0-9]+$/.test(username) && <span className="error">Username must be alphanumeric.</span>}
                                </div>
                            )}
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <div>
                                <progress value={passwordStrength(password)} max="4"></progress>
                                <span>
                                    {passwordStrength(password) === 0 && 'Weak'}
                                    {passwordStrength(password) === 1 && 'Fair'}
                                    {passwordStrength(password) === 2 && 'Good'}
                                    {passwordStrength(password) === 3 && 'Strong'}
                                    {passwordStrength(password) === 4 && 'Very Strong'}
                                </span>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            {confirmPassword && password !== confirmPassword && (
                                <span className="error">Passwords do not match.</span>
                            )}
                        </div>
                        <button type="button" onClick={prevStep}>Back</button>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default MultiStepForm;