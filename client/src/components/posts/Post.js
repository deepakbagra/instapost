import React, {useState, useEffect} from 'react';
import {
  Card, CardActions, CardContent,
  CardMedia, Button, Typography, IconButton
} from '@material-ui/core';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import Modal from '@material-ui/core/Modal';
import DeleteIcon from '@material-ui/icons/Delete';
import CancelIcon from '@material-ui/icons/Cancel';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import FavoriteBorderOutlinedIcon  from '@material-ui/icons/FavoriteBorderOutlined';
import EditIcon from '@material-ui/icons/Edit';

import { deletePost, likePost } from '../../redux/actions/postActions';
import PostForm from '../postForm/PostForm';


const Post = ({ post, setCurrentId }) => {
  
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenEdit, setModalOpenEdit] = useState(false);
  const [isDisabled, setIsdisabled] = useState(true);
  const user = JSON.parse(localStorage.getItem('profile'));
  
  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <>
            <FavoriteOutlinedIcon  style={{color:'#3f51b5'}} fontSize='small'/>&nbsp;
            {post.likes.length > 2 ?
              `You and ${post.likes.length - 1} others`
              : `${post.likes.length}`}
          </>
        ) : (
          <>
            <FavoriteBorderOutlinedIcon style={{color:'black'}} fontSize='small' />&nbsp;
            {post.likes.length} </>
        )
    };

    return <><FavoriteBorderOutlinedIcon style={{color:'black'}} fontSize='small' />&nbsp;</>;
  }

  useEffect(() => {
    if (user?.result?.googleId === post?.creatorId || user?.result?._id === post?.creatorId)
      setIsdisabled(prev => !prev);
  }, [user?.result?.googleId, post?.creatorId, user?.result?._id]); 
        
 
  //Modal toggle settings for 'show more..' tag
  const handleModalOpen = () => { setModalOpen(true) };
  const handleModalClose = () => { setModalOpen(false) };

  
  //Modal toggle settings for edit tag
  const handleModalOpenEdit = () => { setModalOpenEdit(true) };
  const handleModalCloseEdit = () => { setModalOpenEdit(false) };

  const classes = useStyles();
  const dispatch = useDispatch();
  
  const handleEditChange = () => {
    dispatch({ type: 'CURRENT_ID', payload: post._id})
  }
 
    return (
      <Card className={classes.card} >
        <CardMedia className={classes.img} image={post.file} />
             
        <CardContent>
          <Typography gutterBottom style={{fontSize:'.9rem', fontWeight:'bold', marginLeft:'3%'}}>
            {post.item}
          </Typography>
          <Typography gutterBottom className={classes.priceTag}>
            <AttachMoneyIcon />
            {post.price}
          </Typography>
          <Button onClick={handleModalOpen} style={{textTransform: 'none'}}>
            <Typography color='primary' style={{fontSize:'.9rem', fontWeight:'bold'}}>
              more detail ...
            </Typography>            
          </Button>
          <Typography style={{fontSize: '0.7rem', color:'grey', marginLeft:'3%', fontWeight:'bold'}}>
            Posted By: {post.name}
          </Typography> 
          <Typography style={{fontSize:'0.7rem', color:'grey', marginLeft:'3%'}}>
            {moment(post.postedAt).fromNow()}...
          </Typography>
          <Modal open={modalOpen} onClose={handleModalClose} className={classes.modal}>
            
              <Card style={{width: '50%', margin:'20%'}}>
                <CardContent>
                  <Typography variant='body2' >
                    {post.detail}
                  </Typography>                  
                </CardContent>
                <CardActions>
                  <Button color='primary' onClick={handleModalClose} >
                      close
                  </Button>
                </CardActions>
              </Card>
            
          </Modal>
        </CardContent>
        <CardActions style={{justifyContent:'center'}} className={classes.actions}>
          {                      
            <Button className={classes.btn} disabled={isDisabled} size='small' color='secondary' onClick={() => dispatch(deletePost(post._id))}>
              <DeleteIcon fontSize='small' />
            </Button>
          }
          <Button className={classes.btn} size='small' disabled={!user?.result} color='primary' onClick={() => dispatch(likePost(post._id))}>
            <Likes />
          </Button>
          <div>
            {              
              <Button size='small' disabled={isDisabled} onClick={handleEditChange}>
                <EditIcon className={classes.btn} onClick={handleModalOpenEdit} size='small' style={{fontSize:'.9rem'}} />
              </Button>
            }
            <Modal className={classes.modal} open={modalOpenEdit} onClose={handleModalCloseEdit}>
              <>
              <IconButton onClick={handleModalCloseEdit} className={classes.xButton} type='submit'><CancelIcon fontSize='large'/></IconButton>
                <PostForm />
              </>
            </Modal>
          </div>
        </CardActions>
      </Card>
  );
};

export default Post;
