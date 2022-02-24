import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import Posts from '../posts/Posts';
import { listPosts } from '../../redux/actions/postActions';

const Home = () => {
   
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(listPosts());
    }, [dispatch]);

    return (
        <Container >
            <Posts />
        </Container>
  );
};

export default Home;
