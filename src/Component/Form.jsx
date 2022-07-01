import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function Form() {
  const[data,setData]=useState(
    {
      fullName:"",
      email:"",
      password:""
    }
  );
  const InputEvent= (event) =>{
    const{name,value}=event.target;

    setData( (preVal)=>{
      return{
      ...preVal,
       [name]:value,
      };
  });
};
  const display=()=>{
    <div>
    <h1>{data.fullName}</h1>
    <h2>Your Username is ${data.email}</h2>
    <h2>Your Password is ${data.password}</h2>
    </div>
  };
  


  const formSubmit=(e)=>{
    // e.preventDefault();
    alert(` FullName is ${data.fullName}.Email is ${data.email}.Password is ${data.password}`);
 display();
  };
  return (
    <div >
      <form onSubmit={formSubmit} >
        <div>
          <TextField
            id="outlined-basic"
            type="text"
            label="FullName"
            variant="outlined"
            name="fullName"
            value={data.fullName}
            onChange={InputEvent}
            required="true"
          />
        </div><br/>
        <div>
        <TextField
            id="outlined-basic"
            type="email"
            label="Email"
            variant="outlined"
            name="email"
            value={data.email}
            onChange={InputEvent}
            required="true"
          />
        </div><br/>
        <div>
          <TextField
            id="outlined-basic"
            type="password"
            label="Password"
            variant="outlined"
            name="password"
            value={data.password}
            onChange={InputEvent}
            required="true"
          />
        </div><br/>
        <div>
          <Button variant="contained" type="submit" >Sign in</Button>
        </div>
     
      </form>
     
    
    </div>
  );
}

export default Form;
