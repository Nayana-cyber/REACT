import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const ThemeSwitcher = () => {
    const { theme, setTheme } = useContext(AppContext);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
    );
};

export default ThemeSwitcher;
