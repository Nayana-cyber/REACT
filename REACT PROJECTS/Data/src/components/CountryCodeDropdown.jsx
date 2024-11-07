import React from 'react';
import { countries } from '../data/countries';

const CountryCodeDropdown = ({ countryCode, setCountryCode }) => {
  return (
    <select
      value={countryCode.code}
      onChange={(e) => {
        const selectedCountry = countries.find(country => country.code === e.target.value);
        setCountryCode(selectedCountry);
      }}
    >
      {countries.map((country) => (
        <option key={country.code} value={country.code}>
          {country.flag} {country.code}
        </option>
      ))}
    </select>
  );
};

export default CountryCodeDropdown;