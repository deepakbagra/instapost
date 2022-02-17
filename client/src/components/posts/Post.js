import React from 'react';
import {
  Card, CardActions, CardContent,
  CardMedia, Button, Typography
} from '@material-ui/core';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import useStyles from './styles';

const Post = ({ post }) => {
  const classes = useStyles();
  
    return (
      <Card>
        <CardMedia className={classes.img }image={post.file} />
        <CardContent>
          {post.item}
        </CardContent>
      </Card>
  );
};

export default Post;
