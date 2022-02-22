import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:9000' });

// Axios interceptor for Authorization before making API calls

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    console.log(req);
    return req;
})

// post related

export const listPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likepost`);

// auth related

export const signIn = (formSignin) => API.post('/users/signin/', formSignin);
export const signUp = (formSignUp) => API.post('/users/signup/', formSignUp);