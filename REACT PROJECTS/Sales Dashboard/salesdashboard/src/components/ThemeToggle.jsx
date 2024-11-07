import React from 'react';

const ThemeToggle = ({ theme, toggleTheme }) => (
  <button onClick={toggleTheme}>
    Switch to {theme === 'light' ? 'dark' : 'light'} mode
  </button>
);

export default ThemeToggle;
