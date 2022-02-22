import React, {useState, useEffect} from 'react';
import {
  Card, CardActions, CardContent,
  CardMedia, Button, Typography, IconButton
} from '@material-ui/core';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import Modal from '@material-ui/core/Modal';
import DeleteIcon from '@material-ui/icons/Delete';
import CancelIcon from '@material-ui/icons/Cancel';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import FavoriteBorderOutlinedIcon  from '@material-ui/icons/FavoriteBorderOutlined';
import EditIcon from '@material-ui/icons/Edit';
import Skeleton from '@mui/material/Skeleton';

import { deletePost, likePost } from '../../redux/actions/postActions';
import PostForm from '../postForm/PostForm';

 

const Post = ({ post, disableTags }) => {
  
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenEdit, setModalOpenEdit] = useState(false);  

  const user = JSON.parse(localStorage.getItem('profile'));
 
  const classes = useStyles();
  const dispatch = useDispatch();

  
  const Likes = () => {
    const likeCounts = post.likes.length;

    if (likeCounts > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <>
            <FavoriteOutlinedIcon  style={{color:'#3f51b5'}} fontSize='small'/>&nbsp;
            {post.likes.length > 1 ?
              <div className={classes.likes}>
                You and {likeCounts - 1} {likeCounts === 2 ? 'other' : 'others'}
              </div>
              : `${likeCounts}`}
          </>
        ) : (
          <>
            <FavoriteBorderOutlinedIcon style={{color:'black'}} fontSize='small' />&nbsp;
            {likeCounts} </>
        )
    };
    return <><FavoriteBorderOutlinedIcon style={{color:'black'}} fontSize='small' />&nbsp;</>;
  }
  
  const setActions = () => {
    if (user?.result?.googleId === post?.creatorId || user?.result?._id === post?.creatorId)
      return false;
    else
      return true;
  }

  //Modal toggle settings for 'show more..' tag
  const handleModalOpen = () => { setModalOpen(true) };
  const handleModalClose = () => { setModalOpen(false) };
  
  //Modal toggle settings for edit tag
  const handleModalOpenEdit = () => { setModalOpenEdit(true) };
  const handleModalCloseEdit = () => { setModalOpenEdit(false) };  
  
  const handleEditChange = () => {
    dispatch({ type: 'CURRENT_ID', payload: post._id})
  }
 
    return (
      <Card className={classes.card} >
        {post.file ? (<CardMedia className={classes.img} image={post.file} alt={post.item} />) : <Skeleton sx={{ height: 140 }} animation="wave" variant="rectangular" />}
             
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
            <Button className={classes.btn} disabled={setActions()} size='small' color='secondary' onClick={() => dispatch(deletePost(post._id))}>
              <DeleteIcon fontSize='small' />
            </Button>
          }
          <Button className={classes.btn} size='small' disabled={!user?.result} color='primary' onClick={() => dispatch(likePost(post._id))}>
            <Likes />
          </Button>
          <div>
            {              
              <Button size='small' disabled={setActions()} onClick={handleEditChange}>
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
