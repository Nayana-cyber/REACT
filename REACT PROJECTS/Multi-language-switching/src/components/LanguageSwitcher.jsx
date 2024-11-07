// src/components/LanguageSwitcher.js

import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = ({ onLanguageChange }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    onLanguageChange(lang); // Notify App of the language change
  };

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage('en')} title="English">
        🇬🇧
      </button>
      <button onClick={() => changeLanguage('es')} title="Spanish">
        🇪🇸
      </button>
      <button onClick={() => changeLanguage('fr')} title="French">
        🇫🇷
      </button>
      <button onClick={() => changeLanguage('de')} title="German">
        🇩🇪
      </button>
    </div>
  );
};

export default LanguageSwitcher;
