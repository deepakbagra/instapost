import { AppBar, IconButton, Paper, InputBase, Typography, Button, Avatar } from '@material-ui/core';

import CancelIcon from '@material-ui/icons/Cancel';
import HomeIcon from '@material-ui/icons/Home';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from './styles';
import Modal from '@material-ui/core/Modal';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import PostForm from '../postForm/PostForm';
import SearchBar from './SearchBar';

const Header = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const [modalOpen, setModalOpen] = useState(false);
  
  const handleModalOpen = () => {
    if (!user) {
      alert('Please Sign in to post your Ad');
    }
    else {
      setModalOpen(true);
      dispatch({ type: 'CURRENT_ID', payload: null });
    }
  }

  const handleModalClose = () => { setModalOpen(false) };

  const classes = useStyles();
  
  const logout = () => {    
    dispatch({ type: 'LOGOUT' });
    navigate('/');
    setUser(null);    
  }

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
     
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }      
    }

    setUser(JSON.parse(localStorage.getItem('profile')));

  }, [navigate]);
 

  return (
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography variant='h6' >reject-shop</Typography>
        <Paper  comonent='form' autoComplete='off' noValidate className={classes.searchBar}>
            <SearchBar />
        </Paper>
        <div className={classes.navLinks}>
          <IconButton component={Link} to='/'><HomeIcon /></IconButton>
          <Button className={classes.auth} onClick={handleModalOpen} style={{padding: '0.2em'}} >
            Post Ad
          </Button>
          <Modal className={classes.modal} open={modalOpen}  onClose={handleModalClose}>
          <>
            <IconButton onClick={handleModalClose} className={classes.xButton} type='submit'><CancelIcon fontSize='large'/></IconButton>
            <PostForm />
          </>          
          </Modal>         
          {user ? (
            <div className={classes.profile}>
              <Avatar className={classes.purple} alt={user?.result?.name} src={user.imageUrl}>{user?.result?.name.charAt(0)}</Avatar>
              <Button variant='text' onClick={logout} className={classes.auth} color='secondary'>Logout</Button>
            </div>
            ) : (
              <> 
                <Button className={classes.auth} component={Link} to='/auth/signin' variant='text' >Sign In</Button>
                <Typography className={classes.divider}>|</Typography>
                <Button className={classes.auth} component={Link} to='/auth/signup' variant='text' >Sign Up</Button>
              </>  
            )
          }
          
        </div>
      </AppBar>
  );
};

export default Header;
