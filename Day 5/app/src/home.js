import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default function HomePage() {
  return (
  
    <div>
      <div className="Home">
        <Link to="/AdminLogin" className="Homeadmin">
          AdminLogin
        </Link>
        <Link to="/StaffLogin" className="Homestaff">
          StaffLogin
        </Link>
        <Link to="/StudentLogin" className="Homestudent">
          StudentLogin
        </Link>
      </div>
    </div>
  );
}