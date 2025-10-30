import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import ECertificate from './ECertificate';
import './Registration.css';

const Registration: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/registration') {
      return location.pathname === '/registration';
    }
    return location.pathname.includes(path);
  };

  return (
    <div className="registration-container">
      <div className="registration-header">
        <h1 className="registration-title">Registration</h1>
        <div className="registration-tabs">
          <Link to="/registration" className={`registration-tab ${location.pathname === '/registration' ? 'active' : ''}`}>
            Register
          </Link>
          <Link to="/registration/certificate" className={`registration-tab ${isActive('/registration/certificate') ? 'active' : ''}`}>
            E-Certificate
          </Link>
        </div>
      </div>

      <Routes>
        <Route index element={<RegistrationForm />} />
        <Route path="certificate" element={<ECertificate />} />
      </Routes>
    </div>
  );
};

export default Registration;

