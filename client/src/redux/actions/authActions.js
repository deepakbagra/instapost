import * as api from '../../api';
import { AUTH } from '../../redux/constants/actionTypes';

export const signIn = (formSignIn, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formSignIn);

        dispatch({ type: AUTH, payload: data });

        navigate('/');
    } catch (error) {
        console.log(error);
    }
}

export const signUp = (formData, navigate) => async (dispatch) => {    
    try {
        // sign up in the user        
        const { data }  = await api.signUp(formData);
        
        dispatch({ type: AUTH, payload: data });        
        
        navigate('/');
    } catch (error) {
        console.log(error)
    }
}