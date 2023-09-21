import React, { useState } from 'react';
import './StudentLogin.css';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const authenticate = (e) => {
    e.preventDefault();

    if (password.length === 0 || email.length === 0) {
      alert('Please enter all fields');
    } else if (!isValidEmail(email)) {
      alert('Please enter a valid email address');
    }
    // Add code for authentication logic here
  };

  return (
    <div>
      <div className="Staffimg">
        <div className="Staffmain">
          <h1 className="Stafftitle">Student Login</h1>
          <input
            className="Staffemail"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="Staffpassword"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            onClick={authenticate}
            className="Staffsubmit"
            type="submit"
            value="Login"
          />
          
        </div>
      </div>
    </div>
  );
}
