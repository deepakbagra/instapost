import express from 'express';

import { signUp, signIn } from '../controller/users.js';

const router = express.Router();

// routing to http://localhost:9000/users

router.post('/signin', signIn);
router.post('/signup', signUp);



export default router;