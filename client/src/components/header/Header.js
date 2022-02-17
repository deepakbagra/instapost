import { AppBar, IconButton, Paper, InputBase, Typography, TextField, MenuItem } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import CancelIcon from '@material-ui/icons/Cancel';
import useStyles from './styles';
import Modal from '@material-ui/core/Modal';
import React, { useState } from 'react';

import PostForm from '../postForm/PostForm';

const Header = () => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
 
  const handleModalOpen = () => { setModalOpen(true) };
  const handleModalClose = () => { setModalOpen(false) };

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
            <IconButton fontSize='' onClick={handleModalClose} className={classes.xButton} type='submit'><CancelIcon fontSize='large'/></IconButton>
            <PostForm onClick={handleModalClose}/>
          </>
          
        </Modal>
        </div>
      </AppBar>
  );
};

export default Header;
