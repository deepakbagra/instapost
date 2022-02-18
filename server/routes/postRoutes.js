import express from 'express';
import { getPosts, createPost, deletePost } from '../controller/posts.js';

const router = express.Router();

// routing to http://localhost:9000/posts

router.get('/', getPosts);
router.post('/', createPost);
router.delete('/:id', deletePost);

export default router;
