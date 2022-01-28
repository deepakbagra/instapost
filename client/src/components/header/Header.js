import { AppBar, IconButton, Paper, InputBase, Typography, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './headerStyles';

import React from 'react';

const Header = () => {
    const classes = useStyles();

  return (
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography>instapost</Typography>
        <Paper  comonent='form' autoComplete='off' noValidate className={classes.searchBar}>
            <InputBase style={{padding: '0.25em'}} placeholder='Search' />
            <IconButton style={{padding: '0.2em'}} type='submit' aria-label='search'>
                <SearchIcon fontSize='small' />
            </IconButton>
        </Paper>        

      </AppBar>
  );
};

export default Header;
