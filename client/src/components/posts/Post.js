import React, {useState} from 'react';
import {
  Card, CardActions, CardContent,
  CardMedia, Button, Typography, IconButton
} from '@material-ui/core';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import Modal from '@material-ui/core/Modal';
import DeleteIcon from '@material-ui/icons/Delete';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CancelIcon from '@material-ui/icons/Cancel';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

import { deletePost } from '../../redux/actions/postActions';


const Post = ({ post }) => {
  const [modalOpen, setModalOpen] = useState(false);
 
  const handleModalOpen = () => { setModalOpen(true) };
  const handleModalClose = () => { setModalOpen(false) };

  const classes = useStyles();
  const dispatch = useDispatch();

  
  
    return (
      <Card>
        <CardMedia className={classes.img }image={post.file} />
        <CardContent>
          <Typography gutterBottom variant='body2'>
            {post.item}
          </Typography>
          <Typography gutterBottom className={classes.priceTag}>
            <AttachMoneyIcon />
            {post.price}
          </Typography>
          <Button onClick={handleModalOpen} style={{textTransform: 'none'}}>
            <Typography color='primary' variant='body2'>
              more detail ...
            </Typography>
          </Button>
          <Modal>
          <IconButton onClick={handleModalClose} className={classes.xButton} type='submit'><CancelIcon fontSize='small'/></IconButton>
          </Modal>
        </CardContent>
        <CardActions>
          <Button size='small' color='secondary' onClick={() => {dispatch(deletePost(post._id)) }}>
            <DeleteIcon fontSize='small' />
          </Button>
          <Button size='small' color='primary' onClick={() => {}}>
            <FavoriteBorder fontSize='small' />
          </Button>
        </CardActions>
      </Card>
  );
};

export default Post;
