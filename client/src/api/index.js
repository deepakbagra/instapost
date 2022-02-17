import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:9000' });

export const listPosts = () => API.get('/posts');

export const createPost = (newPost) => API.post('/posts', newPost);