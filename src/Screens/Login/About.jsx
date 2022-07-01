import React from 'react';
import Form from '../../Component/Form';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// import Button from '@mui/material/Button';

function About() {
  return (
    <div className="page">
      <div className="photo"></div>
      <div className="content">
        <h1>Register with us </h1>
        <Form/>
        {/* <form>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              {' '}
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                required="true"
              />
            </div>
            <div>
              {' '}
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                required="true"
              />
            </div>
            <div>
              {' '}
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                required="true"
              />
            </div>
            <div>
              {' '}
              <TextField
                id="outlined-basic"
                label="FullName"
                variant="outlined"
                required="true"
              />
            </div>

            <div>
              {' '}
              <TextField
                id="filled-basic"
                label="Contact No"
                variant="filled"
                required="true"
              />
            </div>

            <Button variant="contained" type="submit" href="/contact">
              Submit
            </Button>
          </Box>
        </form> */}
      </div>
    </div>
  );
}

export default About;
