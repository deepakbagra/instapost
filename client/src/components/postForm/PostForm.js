import React, { useState, useEffect } from 'react';
import { Paper, TextField, Typography, Button } from '@material-ui/core';
import useStyles from './styles';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';


import { createPost, updatePost } from '../../redux/actions/postActions';

const PostForm = () => {    
    const [postData, setPostData] = useState({        
        item: '',
        detail: '',
        price: '',
        file: '',        
    });

    const currentId = useSelector((state) => state.currentId);

    const user = JSON.parse(localStorage.getItem('profile'));

    const classes = useStyles();
    const dispatch = useDispatch();

    const post = useSelector(
        (state) => currentId ? state.posts.find(
            (post) => post._id === currentId) : null);      
      
    useEffect(() => { 
    if (post) setPostData(post);
    }, [post]);

    const clear = () => {
        setPostData({ item: '', detail: '', price: '', file: '' });        
    }

    const handleChange = (e) => {
        setPostData({
            ...postData,            
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!currentId) {  
            dispatch(createPost({ ...postData, name: user?.result?.name }));   
            clear();
          }
          else {     
            dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
            clear();
          }
    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate onSubmit={handleSubmit}>
                <div >
                    <Typography className={classes.header}>{!currentId ? 'Create new Ad' :'Edit your Ad'}</Typography>
                    <TextField className={classes.form} size='small'
                        name='item'
                        label='Product name'
                        variant='outlined'
                        fullWidth
                        value={postData.item}
                        onChange={handleChange}
                    />                    
                    <TextField className={classes.form} size='small'
                        name='detail'
                        label='Detail'
                        variant='outlined'
                        fullWidth
                        value={postData.detail}
                        onChange={handleChange}
                    />
                    <TextField className={classes.form} size='small'
                        name='price'
                        label='Price'
                        variant='outlined'
                        fullWidth
                        value={postData.price}
                        onChange={handleChange}
                    />
                    <Typography className={classes.img} size='small'>Upload an image file</Typography>
                    <div component='box' className={classes.file} >
                        <FileBase className={classes.file}
                            type='file'
                            multiple={false}
                            onDone={({ base64 }) => setPostData({ ...postData, file: base64 })} />
                    </div> 
                </div>
                <Button className={classes.button}
                    variant='contained'
                    color='primary'
                    type='sumbit'
                    size='small'
                    fullWidth                    
                    > Sumbit
                </Button>
            </form>
      </Paper>  
  );
};

export default PostForm;
