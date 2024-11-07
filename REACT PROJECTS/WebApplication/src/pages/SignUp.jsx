// src/components/SignUp.js
import React from 'react';
import './SignUp.css'; // Create a separate CSS file for styling

const SignUp = () => {
  return (
    <div className="sign-up-container">
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;