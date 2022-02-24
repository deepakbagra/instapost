import mongoose from 'mongoose';
import Posts from '../models/postSchema.js';

export const getPosts = async (req, res) => {
    try {
        const posts = await Posts.find();
        
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json( {message: error.message});
    }
}

export const createPost = async (req, res) => {    
    const post = req.body;
    
    const newPost = new Posts({ ...post, creatorId: req.userId, postedAt: new Date().toISOString() });
   
    try {
        await newPost.save();
        
        res.status(201).json(newPost);
    } catch (error) {
        res.status(404).json( {message: error.message});
    }
}

export const updatePost = async (req, res) => {   
    const post = req.body; 
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with this id');
    
    const updatedPost = await Posts.findByIdAndUpdate(_id, post, { new: true });

   
    res.json(updatedPost);    
}

export const deletePost = async (req, res) => { 
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with this id');

    await Posts.findByIdAndRemove(id);

    res.json({ message: 'Post deleted successfully' });    
}

export const likePost = async (req, res) => {
    const id = req.params.id;

    if (!req.userId) return res.json({ message: 'Unauthenticated!' });

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with this id');

    const post = await Posts.findById(id);
   
    const index = post.likes.findIndex(id => id === req.userId);

    if (index === -1) {
        post.likes.push(req.userId);        
    } else {
        post.likes = post.likes.filter((id) => id!== String(req.userId));
    }

    const updatedPost = await Posts.findByIdAndUpdate(id, post, { new: true });

    res.json(updatedPost);
}
