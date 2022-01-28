import { AppBar, IconButton, Paper, InputBase, Typography, TextField, MenuItem } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './headerStyles';

import React from 'react';

const Header = () => {
    const classes = useStyles();

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
          <IconButton style={{padding: '0.2em'}} type='submit' aria-label='add'>
            <AddIcon />
          </IconButton>
        </div>
      </AppBar>
  );
};

export default Header;
