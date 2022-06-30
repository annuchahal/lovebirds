import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';




class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }
  render () {
    return (
          
      <form className="demoForm" >

<Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
        <h2>Sign up</h2>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          
          <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                required="true"
                name="email"
                value={this.state.email}
                onChange={this.handleUserInput} 
              />
           
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          
        <TextField
                id="outlined-basic"
                label="Password"
                type="password"
                variant="outlined"
                name="password"
                required="true"

            value={this.state.password}
            onChange={this.handleUserInput} 
              /> 
        </div>
        <button type="submit" className="btn btn-primary" disabled={!this.state.formValid }>Sign up</button>
       
            
        </Box>
       
      </form>
   

    )
  }
}

export default Form;