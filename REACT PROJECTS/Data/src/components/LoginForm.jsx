import React, { useState, useEffect } from 'react';
import { countries } from '../data/countries';       
import { languageStrings } from '../data/languages';
import CountryCodeDropdown from './CountryCodeDropdown';
import LanguageSwitcher from './LanguageSwitcher';

const LoginForm = () => {
  const [countryCode, setCountryCode] = useState(countries[0]);
  const [language, setLanguage] = useState('en');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const storedCountry = localStorage.getItem('countryCode');
    const storedLanguage = localStorage.getItem('language');          
    if (storedCountry) { 
      setCountryCode(JSON.parse(storedCountry));
    }
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('countryCode', JSON.stringify(countryCode));
    localStorage.setItem('language', language);
  }, [countryCode, language]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ phone: countryCode.code, email, password });
  };

  const price = 100; // Base price in USD
  const currencyPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: countryCode.currency }).format(price);

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <CountryCodeDropdown countryCode={countryCode} setCountryCode={setCountryCode} />
        <input type="tel" placeholder="Phone Number" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={languageStrings[language].emailLabel}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={languageStrings[language].passwordLabel}
        />
        <button type="submit">{languageStrings[language].submit}</button>
      </form>
      <div>
        <h3>{languageStrings[language].priceLabel} {currencyPrice}</h3>
      </div>
      <LanguageSwitcher language={language} setLanguage={setLanguage} />
    </div>
  );
};

export default LoginForm;