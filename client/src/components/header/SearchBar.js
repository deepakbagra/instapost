import React, { useCallback, useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { InputBase, Paper, IconButton } from '@material-ui/core';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

import { listPosts } from '../../redux/actions/postActions';

const SearchBar = () => {
    const [input, setInput] = useState('');
    
    const classes = useStyles();    

    const dispatch = useDispatch();    

    const handleSearch = (e) => {
        const queryText = e?.target?.value;

        setInput(queryText);

      dispatch({ type: 'SEARCH', payload: queryText });      
          
    };

  const clearInput = useCallback(() => {

    setInput('');

    dispatch(listPosts());

  },[dispatch]);
  
  useEffect(() => {

    if (input === '') clearInput();
    
  }, [clearInput, input]);

  return (
    <Paper comonent='form' autoComplete='off' noValidate className={classes.searchBar}>
          <InputBase className={classes.searchInput} value={input} onChange={handleSearch} placeholder='search item' />
          { input === '' ?
              <SearchIcon style={{ padding: '0.2rem' }} fontSize='small' />
              : 
              <IconButton onClick={clearInput} > <CloseIcon color='primary'/></IconButton>             
           } 
    </Paper>
  )
}

export default SearchBar;