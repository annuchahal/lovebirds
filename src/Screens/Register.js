import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Register.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleApi = (e) => {
    console.log(name, email, password);
    e.preventDefault();
    axios
      .post('http://localhost:7000/v1/auth/register', {
        name: name,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        alert(`Your account is registered sucessfully`);
        navigate('/login');
        

        localStorage.setItem("tokens",JSON.stringify(response.data.tokens));
        localStorage.setItem("id",JSON.stringify(response.data.user))
        
      })
      .catch((error) => {
        console.log(error);
        
      
        alert(`service error`);
      });
  };
  return (
    <>
      <h1 className="header">Lovebirds</h1>
      <div className="register-div">
        <h1>Register with us </h1>
        <div className="register-div">
          <form onSubmit={handleApi}>
            <div>
              <TextField
                id="outlined-basic"
                type="text"
                label="Name"
                variant="outlined"
                name="name"
                value={name}
                onChange={handleName}
                required="true"
              />
            </div>
            <br />
            <div>
              <TextField
                id="outlined-basic"
                type="email"
                label="Email"
                variant="outlined"
                name="email"
                value={email}
                onChange={handleEmail}
                required="true"
              />
            </div>
            <br />
            <div>
              <TextField
                id="outlined-basic"
                type="password"
                label="Password"
                variant="outlined"
                name="password"
                value={password}
                onChange={handlePassword}
                required="true"
              />
            </div>
            <br />
            <div className="log-div">
              <div>
                <Button variant="contained" type="submit">
                  Register
                </Button>
              </div>
              <div>
                <Link to="/login">Log in</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
