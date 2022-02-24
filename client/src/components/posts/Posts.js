import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react';

import Post from './Post';

const Posts = () => {
  const posts = useSelector(state => state.posts); 
 
  return (
    !posts.length ? <div style={{height: '20rem'}}><CircularProgress /> </div> : (
            <Grid container alignItems='stretch' spacing={2}>
              {posts.map((post) => (
                  <Grid item
                       key={post._id}
                       xs={12} sm={3}>
                      <Post post={post} />
                    </Grid>
              )) }
        </Grid>
        )
  );
};

export default Posts;
