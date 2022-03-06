import mongoose from 'mongoose';
import Chat from '../models/chatSchema.js';

export const getChats = async (req, res) => {    
    
    try {
        const chats = await Chat.find().sort({ date: -1 }).limit(3);        
        
        res.status(200).json(chats);
    } catch (error) {
        res.status(404).json( {message: error.message});
    }
}

export const createChat = async (req, res) => {    
    const { name, message, id } = req.body;
        
    const newPost = new Chat({ name, message, id });
   
    try {
        await newPost.save();
        
        res.status(201).json(newPost);
    } catch (error) {
        res.status(404).json( {message: error.message});
    }
}