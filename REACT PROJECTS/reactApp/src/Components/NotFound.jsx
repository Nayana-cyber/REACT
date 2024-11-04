
import React from 'react';

const NotFound = () => {
  return (
    <div className="container">
      <h1>404 - Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <p>
        <a href="/">Go back to the homepage</a>
      </p>
      <p>Or try searching for what you need:</p>
      <input type="text" placeholder="Search..." />
    </div>
  );
};

export default NotFound;