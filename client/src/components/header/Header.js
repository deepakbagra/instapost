import { AppBar, IconButton, Paper, InputBase, Typography, Button, Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import CancelIcon from '@material-ui/icons/Cancel';
import useStyles from './styles';
import Modal from '@material-ui/core/Modal';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PostForm from '../postForm/PostForm';

const Header = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const [modalOpen, setModalOpen] = useState(false);
  
  const handleModalOpen = () => { setModalOpen(true) };
  const handleModalClose = () => { setModalOpen(false) };

  const classes = useStyles();
  
  const logout = () => {    
    dispatch({ type: 'LOGOUT' });
    navigate('/');
    setUser(null);
  }

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));

  }, [navigate]);
 

  return (
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography variant='h5' >𝖎𝖓𝖘𝖙𝖆𝖕𝖔𝖘𝖙</Typography>
        <Paper  comonent='form' autoComplete='off' noValidate className={classes.searchBar}>
            <InputBase style={{padding: '0.25em'}} placeholder='Search' />
            <IconButton style={{padding: '0.2em'}} type='submit' aria-label='search'>
                <SearchIcon fontSize='small' />
            </IconButton>
        </Paper>
        <div className={classes.navLinks}>
          <IconButton style={{padding: '0.2em'}} type='submit' aria-label='home'>
            <HomeIcon />
          </IconButton>
          <IconButton onClick={handleModalOpen} style={{padding: '0.2em'}} type='submit' aria-label='add'>
            <AddIcon />
          </IconButton>
          <Modal className={classes.modal} open={modalOpen}  onClose={handleModalClose}>
          <>
            <IconButton onClick={handleModalClose} className={classes.xButton} type='submit'><CancelIcon fontSize='large'/></IconButton>
            <PostForm />
          </>          
          </Modal>         
          {user ? (
            <div className={classes.profile}>
              <Avatar className={classes.purple} alt={user.result.name} src={user.imageUrl}>{user.result.name.charAt(0)}</Avatar>
              {/* <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography> */}
              <Button variant='inherit' onClick={logout} className={classes.auth} color='secondary'>Logout</Button>
            </div>
            ) : (
              <> 
                <Button className={classes.auth} component={Link} to='/auth/signin' variant='inherit' color='primary'>Sign In</Button>
                |
                <Button className={classes.auth} component={Link} to='/auth/signup' variant='inherit' color='primary'>Sign Up</Button>
              </>  
            )
          }
          
        </div>
      </AppBar>
  );
};

export default Header;
