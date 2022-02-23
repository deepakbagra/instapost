import { AppBar, IconButton, Paper, InputBase, Typography, Button, Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CancelIcon from '@material-ui/icons/Cancel';
import useStyles from './styles';
import Modal from '@material-ui/core/Modal';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PostForm from '../postForm/PostForm';
import Post from '../posts/Post';

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
    <Post disableTags={true} />
  }

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));

  }, [navigate]);
 

  return (
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography variant='h5' >reject-shop</Typography>
        <Paper  comonent='form' autoComplete='off' noValidate className={classes.searchBar}>
            <InputBase style={{padding: '0.25em'}} placeholder='Search' />
            <IconButton style={{padding: '0.2em'}} type='submit' aria-label='search'>
                <SearchIcon fontSize='small' />
            </IconButton>
        </Paper>
        <div className={classes.navLinks}>          
          <Button className={classes.auth} color='primary' onClick={handleModalOpen} style={{padding: '0.2em'}} >
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
              <Avatar className={classes.purple} alt={user.result.name} src={user.imageUrl}>{user.result.name.charAt(0)}</Avatar>
              <Button variant='text' onClick={logout} className={classes.auth} color='secondary'>Logout</Button>
            </div>
            ) : (
              <> 
                <Button className={classes.auth} component={Link} to='/auth/signin' variant='text' color='primary'>Sign In</Button>
                |
                <Button className={classes.auth} component={Link} to='/auth/signup' variant='text' color='primary'>Sign Up</Button>
              </>  
            )
          }
          
        </div>
      </AppBar>
  );
};

export default Header;
