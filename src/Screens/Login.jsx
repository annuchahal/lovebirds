import React from 'react';
import './Login.css';

import Form from './Components/Form';

const Login = () => {
  return (
    <>
     <h1 className="header">Lovebirds</h1>
      <div className="page">
        <div className="photo"></div>
        <div className="form-div">
          <h1>Login here</h1>
          <Form />
        </div>
      </div>
    </>
  );
};
export default Login;
