import React from 'react';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Home.css';

const Services = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (JSON.parse(!localStorage.getItem('token'))) {
      navigate('/login');
    }
  });
  return (
    <div><div className='container'>
      <div className="out-div">
        <Link to="/login">Log out</Link>
      </div>
      </div>

      <h1 className="header">Lovebirds</h1>
      <h1 className="last">Hello,sir/Mam! Welcome to Lovebirds</h1>
      <h2 className="last">
        Lovebirds provides you many services that will help you know more about
        birds
      </h2>
    </div>
  );
};
export default Services;
