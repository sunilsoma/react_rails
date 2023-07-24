import React, {useState} from "react"
import { Button, TextField, List, ListItem, ListItemText, Container, Box } from '@material-ui/core';
import { Favorite } from '@material-ui/icons';

const Login = ({ loginRememberable, authenticityToken, loginPath }) => {


  return (
      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
    	<div style={{ textAlign: 'center' }}>
      	<h2>Login</h2>
	      <form action={loginPath} method="post">
	        <input type="hidden" name="authenticity_token" value={authenticityToken} />
	        <Box mt={2} mb={2}>
	        	<TextField  label="Email Address"
	          variant="outlined" type="email" name="user[email]" id="email" style={{ marginBottom: '10px' }} />
	        </Box>
	        <Box mt={2} mb={2}>
	        	<TextField  label="Password"
	          variant="outlined" type="password" name="user[password]" id="password" style={{ marginBottom: '10px' }} />
	        </Box>

	        <Button  variant="contained" color="primary" type="submit">Login</Button>
	      </form>
    	</div>
      </Container>
  );
};

export default Login;