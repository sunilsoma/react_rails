import React, {useState} from "react"
import { Button, TextField, List, ListItem, ListItemText, Container, Box, ListItemIcon } from '@material-ui/core';
import { Favorite } from '@material-ui/icons';

const Referral = ({ referrals, authenticityToken, referralsPath }) => {
  return (
      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
    	<div style={{ textAlign: 'center' }}>
      	<h2>Referrals</h2>
	      <form action={referralsPath} method="post">
	        <input type="hidden" name="authenticity_token" value={authenticityToken} />
	        <Box mt={2} mb={2}>
	        	<TextField  label="Email Address"
	          variant="outlined" type="email" name="email" id="email" style={{ marginBottom: '10px' }} />
	        </Box>
	        <Button  variant="contained" color="primary" type="submit">Send Referral Email</Button>
	      </form>


	      <List component="nav" aria-label="main mailbox folders">
	        
	        

	        {referrals.map((referral) => (
	        

	        
			        <ListItem button key={referral.id}>
			          <ListItemIcon>
			            <Favorite />
			          </ListItemIcon>
			           <ListItemText primary={referral.email} />
			        </ListItem>


	         ))}
	      </List>
    	</div>
      </Container>
  );
};

export default Referral;