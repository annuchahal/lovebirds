import React from 'react';
import { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Form() {
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
    console.log({ email, password });
    e.preventDefault();
    axios
      .post('https://reqres.in/api/login', {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result);
        alert(`success`);
        localStorage.setItem("token",JSON.stringify(result.data.token));
        navigate('/services');
      })
      .catch((error) => {
        console.log(error);
        alert(`email not registered`);
      });
  };
  return (
    <div>
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
        <div>
          <Button variant="contained" type="submit">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Form;
