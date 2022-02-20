import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:9000' });

// post related

export const listPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

// auth related

export const signIn = (formSignin) => API.post('/users/signin/', formSignin);
export const signUp = (formSignUp) => API.post('/users/signup/', formSignUp);