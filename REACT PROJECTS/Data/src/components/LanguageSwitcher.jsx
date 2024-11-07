import React from 'react';

const LanguageSwitcher = ({ language, setLanguage }) => {
  return (
    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  );
};

export default LanguageSwitcher;