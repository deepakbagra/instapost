import React, { useState } from 'react';
import { Button, MenuItem, Menu } from '@material-ui/core';
import { Link } from 'react-router-dom';
import LockOpenIcon from '@material-ui/icons/LockOpen';

import useStyles from './styles';

export default function LoginMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        
        
      >
        <LockOpenIcon style={{ fontSize: '1.2rem', padding:'0' }} /> 
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'Login',
        }}
      >
        <MenuItem onClick={handleClose} divider dense className={classes.authMenu} component={Link} to='/auth/signin' variant='text'>Sign in</MenuItem>
        <MenuItem onClick={handleClose}  divider dense className={classes.authMenu} component={Link} to='/auth/signup' variant='text'>Sign up</MenuItem>        
      </Menu>
    </>
  );
}