import React, { useState } from 'react';
import { Paper, TextField, Typography, Button } from '@material-ui/core';
import useStyles from './styles';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import { createPost } from '../../redux/actions/postActions';

const PostForm = () => {    
    const [postData, setPostData] = useState({ item: '',defect: '',file: '' });
    const classes = useStyles();
    const dispatch = useDispatch();

    const clear = () => {
        setPostData({ item: '', defect: '', file: '' });
        
    }

    const handleChange = (e) => {
        setPostData({
            ...postData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData)); 
        clear();
    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate onSubmit={handleSubmit}>
                <div >
                    <Typography className={classes.header}>Create new Ad</Typography>
                    <TextField className={classes.form}
                        name='item'
                        label='Item Name'
                        variant='outlined'
                        fullWidth
                        value={postData.item}
                        onChange={handleChange}
                    />
                    <TextField className={classes.form}
                        name='defect'
                        label='Item Defect'
                        variant='outlined'
                        fullWidth
                        value={postData.defect}
                        onChange={handleChange}
                    />
                    <Typography className={classes.img}>Upload an image file</Typography>
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
                    //onClick={onClick}
                    > Sumbit
                </Button>
            </form>
      </Paper>  
  );
};

export default PostForm;
