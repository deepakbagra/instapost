import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import ChatServer from './chatServer.js';

import http from 'http';
import { Server } from 'socket.io';

//const ENDPOINT = 'http://localhost:3001';
const ENDPOINT = 'https://useditemshop.com';

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: ENDPOINT,
        methods: ['GET', 'POST'],    
    },
});

import postRoutes from './routes/postRoutes.js';
import userRoutes from './routes/userRoutes.js';


dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


app.use('/posts', postRoutes);
app.use('/users', userRoutes);

// welcome message on hosting API on Heroku
app.get('/', (req, res) => {
    res.send('Hello to instapost API');
})

// set-up mongodb data base
const PORT = process.env.PORT || 9000;


mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => server.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// Chat connection
ChatServer(io);