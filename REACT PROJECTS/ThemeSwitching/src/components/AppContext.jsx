import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        dob: '',
        country: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [currentStep, setCurrentStep] = useState(1);
    const [theme, setTheme] = useState('light');

    // Load form data from localStorage
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('formData'));
        if (savedData) {
            setFormData(savedData.formData);
            setCurrentStep(savedData.currentStep);
        }
    }, []);

    // Save form data to localStorage on change
    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify({ formData, currentStep }));
    }, [formData, currentStep]);

    return (
        <AppContext.Provider value={{
            formData,
            setFormData,
            currentStep,
            setCurrentStep,
            theme,
            setTheme
        }}>
            {children}
        </AppContext.Provider>
    );
};
