import express from 'express';
import { getPosts } from '../controller/posts.js';

const router = express.Router();

// routing to http://localhost:9000/posts

router.get('/', getPosts);

export default router;
