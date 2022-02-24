import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from '../posts/Posts';
import { listPosts } from '../../redux/actions/postActions';
import Footer from '../footer/Footer';

const Home = () => {
   
    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(listPosts());
    }, [dispatch]);

    return (
        <Container  >
            <Posts />
            <Footer />
        </Container>
  );
};

export default Home;
