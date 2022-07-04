import React, { useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import axios from 'axios';
import './Register.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = (e) => {
    console.log(email, password);
    e.preventDefault();
    axios
      .post('https://reqres.in/api/register', {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result);
        alert(`Your account is registered sucessfully`);
        localStorage.getItem('id', result.data.id);
        localStorage.getItem('token', result.data.token);
        navigate('/login');
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
            <div className='log-div'>
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
