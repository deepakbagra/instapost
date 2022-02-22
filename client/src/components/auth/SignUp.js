import React, { useState } from 'react';
import { Avatar, Paper, Container, Button, Grid, TextField, InputAdornment, IconButton } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { signUp } from '../../redux/actions/authActions';

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUp = () => {
    const [formData, setFormData] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);

    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(signUp(formData, navigate)); 
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }

    return (
        <Container component='main' className={classes.main} maxWidth='xs'>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField size='small'
                                name='name'
                                label='Name'
                                autoFocus
                                variant='outlined'
                                required
                                fullWidth
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <TextField size='small'
                                name='email'
                                label='Email'
                                autoFocus
                                variant='outlined'
                                required   
                                fullWidth
                                value={formData.email}                                
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField size='small'
                                name='password'
                                label='Password'
                                autoFocus
                                variant='outlined'
                                required      
                                fullWidth
                                value={formData.password}
                                type={showPassword ? 'text' : 'password'}
                                onChange={handleChange}
                                InputProps={{
                                    endAdornment:
                                        <InputAdornment position='end'>
                                            <IconButton onClick={handleShowPassword}>
                                            {showPassword ? <VisibilityOff /> : <Visibility />} 
                                            </IconButton>
                                        </InputAdornment>                                    
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField size='small'
                                name='confirmPassword'
                                label='Repeat Password'
                                autoFocus
                                variant='outlined'
                                required       
                                fullWidth
                                value={formData.confirmPassword}
                                type='password'
                                onChange={handleChange}                                
                            />
                        </Grid>
                    </Grid>
                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit} >
                        Sign Up
                    </Button>
                </form>
              
            </Paper>
        </Container>
    )
}

export default SignUp;