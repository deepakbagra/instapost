import express from 'express';
import { getPosts, createPost } from '../controller/posts.js';

const router = express.Router();

// routing to http://localhost:9000/posts

router.get('/', getPosts);
router.post('/', createPost);

export default router;
