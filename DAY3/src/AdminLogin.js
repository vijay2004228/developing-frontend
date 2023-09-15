import React, { useState } from 'react';
import './StaffLogin.css';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState(''); // Initialize email state
  const [password, setPassword] = useState(''); // Initialize password state

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const authenticate = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

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
          <h1 className="Stafftitle">Admin Login</h1>
          <input
            className="Staffemail"
            type="text"
            placeholder="Email"
            value={email} // Bind value to the state variable
            onChange={(e) => setEmail(e.target.value)} // Update state on change
          />
          <input
            className="Staffpassword"
            type="password"
            placeholder="Password"
            value={password} // Bind value to the state variable
            onChange={(e) => setPassword(e.target.value)} // Update state on change
          />
          <input
            onClick={authenticate}
            className="Staffsubmit"
            type="submit"
            value="Login" // Changed placeholder to value
          />
          <div className="linkregister">
            {/* Add any additional links or components here */}
          </div>
        </div>
      </div>
    </div>
  );
}
