import { AppBar, IconButton, Paper, Typography, Button, Avatar } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import useStyles from './styles';
import PostForm from '../postForm/PostForm';
import SearchBar from './SearchBar';
import BrandName from './BrandName';
import LoginMenu from './LoginMenu';
import LogoutMenu from './LogoutMenu';

const Header = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [screenSize, setScreenSize] = useState(window.innerWidth);

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
  
  const logout = useCallback(() => {
    
    dispatch({ type: 'LOGOUT' });

    navigate('/');

    setUser(null);
    
  }, [dispatch, navigate]);

  useEffect(() => {
    window.addEventListener("resize", () => setScreenSize(window.innerWidth));    
    
    return () => window.removeEventListener("resize", () => setScreenSize(window.innerWidth));    
  });
  
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
     
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }      
    }

    setUser(JSON.parse(localStorage.getItem('profile')));

  }, [navigate, logout, user?.token]);
 

  return (
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography ><BrandName /></Typography>
        <Paper  comonent='form' autoComplete='off' noValidate className={classes.searchBar}>
            <SearchBar />
        </Paper>
        <div className={classes.navLink} >                        
          <Button className={classes.auth} onClick={handleModalOpen} style={{ padding: '0em' }} >
          {screenSize > 600 ? 'Post Ad' : <AddIcon />} 
          </Button>
          <Modal className={classes.modal} open={modalOpen}  onClose={handleModalClose}>
          <>            
            <PostForm closeAd={handleModalClose} />
          </>          
          </Modal>         
          {user ? (
          <div className={classes.profile}>
            {screenSize > 600 ?
              <>
                <Avatar className={classes.avatar} alt={user?.result?.name} src={user.imageUrl}>{user?.result?.name.charAt(0)}</Avatar>
                <Button variant='text' onClick={logout} className={classes.auth} color='secondary'>Logout</Button>
              </> : <LogoutMenu logout={logout} user={user} />}
              </div>
            ) :  (screenSize > 600 ? 
              <> 
                <Button className={classes.auth} component={Link} to='/auth/signin' variant='text' >Sign In</Button>
                
              </> :  <LoginMenu />
            )
          }
          
        </div>
      </AppBar>
  );
};

export default Header;
