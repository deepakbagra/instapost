import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
//import { Server } from 'socket.io';


import postRoutes from './routes/postRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
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

//const server = app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// const io = new Server(server);

// io.on('connection', socket => {
//     socket.on('message', ({ name, message }) => {
//         io.emit('message', {name, message})
//     })
// })






