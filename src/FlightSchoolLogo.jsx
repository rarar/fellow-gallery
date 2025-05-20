import React from 'react';
import './FlightSchoolLogo.css';

const FlightSchoolLogo = () => {
  return (
    <div className="flight-school-logo">
      <svg className="logo-icon" width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10C30.67 10 15 25.67 15 45C15 64.33 30.67 80 50 80C69.33 80 85 64.33 85 45C85 25.67 69.33 10 50 10ZM50 70C36.19 70 25 58.81 25 45C25 31.19 36.19 20 50 20C63.81 20 75 31.19 75 45C75 58.81 63.81 70 50 70Z" fill="#2868D9"/>
        <path d="M37.5 35C43.3 35 48 30.3 48 24.5C48 18.7 43.3 14 37.5 14C31.7 14 27 18.7 27 24.5C27 30.3 31.7 35 37.5 35Z" fill="#5AD2F4"/>
        <path d="M62.5 76C68.3 76 73 71.3 73 65.5C73 59.7 68.3 55 62.5 55C56.7 55 52 59.7 52 65.5C52 71.3 56.7 76 62.5 76Z" fill="#5AD2F4"/>
      </svg>
      <span className="logo-text">the flight school</span>
    </div>
  );
};

export default FlightSchoolLogo;