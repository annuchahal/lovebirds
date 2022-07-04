import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
         <h1 className="header">Lovebirds</h1>
      <h1 className="last">Welcome to Lovebirds Organization</h1>
      <h2 className="second">
        One of the best websites for giving you more opportunities to work on
        birds
      </h2>
      <div className="last">
        <h1>Lets get Started</h1>
        <div className="btn">
          {' '}
          <Link to="/register">GET Started</Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
