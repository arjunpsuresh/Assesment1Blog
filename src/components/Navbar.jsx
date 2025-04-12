import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Blog Dashboard
        </Typography>
        <Link to='/home'>
        <Button  variant='contained'color='success'>Home</Button>
        </Link>&nbsp;
         <Link to='/add'>
        <Button variant='contained' color='success'>Add Blog</Button>  
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
