import React, { useState } from 'react';
import { Avatar, Paper, Grid, TextField, IconButton, InputAdornment, Container, Button } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { GoogleLogin } from 'react-google-login';
import GoogleIcon from './GoogleIcon';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { signIn } from '../../redux/actions/authActions';

const initialState = { email: '', password: '' };

const SignIn = () => {
    const [formData, setFormData] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);

    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(signIn(formData, navigate)); 
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        console.log('Google success response',res);

        try {
            dispatch({ type: 'AUTH', payload: { result, token }});

            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }
    const  googleFailure = (error) => {        
        console.log('Google Sign in was unsuccessful. Try again later.')
    }  

    return (
        <Container component='main' maxWidth='xs' className={classes.main}>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
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
                        <Grid item xs={12} >
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
                    </Grid>
                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit} >
                        Sign In
                    </Button>
                </form>
                <GoogleLogin
                    clientId='9821150940-ssoeabl4mh0amcmco2j5h6usn4531p9g.apps.googleusercontent.com'
                    render={(renderProps) => (
                        <Button
                            className={classes.googleButton}
                            color='primary'
                            fullWidth
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            startIcon={<GoogleIcon />}
                            variant='contained'
                        >
                            Google Sign In
                        </Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy='single_host_origin'
                />
            </Paper>
        </Container>
    )
}

export default SignIn;