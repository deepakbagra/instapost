import { combineReducers } from 'redux';
import posts from './postReducers';
import auth from './authReducers';
import currentId from './currentIdReducer';

export default combineReducers({ posts, auth, currentId });