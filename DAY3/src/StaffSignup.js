import React, { useState } from 'react';
import './StaffSignup.css';

export default function Login() {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [type, setType] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidMobile = (mobile) => {
    const mobileRegex = /^[0-9]{10}$/; // Assumes a 10-digit mobile number
    return mobileRegex.test(mobile);
  };

  const authenticate = (e) => {
    e.preventDefault();

    if (
      name.length === 0 ||
      department.length === 0 ||
      type.length === 0 ||
      mobile.length === 0 ||
      email.length === 0 ||
      password.length === 0
    ) {
      alert('Please enter all fields');
    } else if (!isValidEmail(email)) {
      alert('Please enter a valid email address');
    } else if (!isValidMobile(mobile)) {
      alert('Please enter a valid 10-digit mobile number');
    } else {
      // Add code for registration logic here
    }
  };

  return (
    <div>
      <div className="Staffreg">
        <div className="regmain">
          <h1 className="regtitle">Staff Registration</h1>
          <input
            className="Staffname"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="Staffdepartment"
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <input
            className="Stafftype"
            type="text"
            placeholder="Assistant/Associate"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <input
            className="Staffmobile"
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <input
            className="regemail"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="regpassword"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            onClick={authenticate}
            className="Staffregister"
            type="submit"
            value="Register"
          />
        </div>
      </div>
    </div>
  );
}
