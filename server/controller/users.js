import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import User from '../models/userSchema.js';

dotenv.config();

const SECRET = process.env.TOKEN_SECRET;

export const signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (!existingUser) return res.send('User does not exist');

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) return res.send('Invalid credentials');

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id}, SECRET, { expiresIn: '2h'});

        res.status(200).json({ result: existingUser, token});
    } catch (error) {
        res.status(500).json({ message: 'Something wrong happened!'});
    }
}

export const signUp = async (req, res) => {
  
    const { name, email, password, confirmPassword } = req.body;    

    try {
        const existingUser = await User.findOne({ email });

        
        if (existingUser) return res.send('User already exists.');

        if (password !== confirmPassword) return res.send('Password does not match.');

        const hashedPassword = await bcrypt.hash(password, 8);

        const result = await User.create({ email, password: hashedPassword, name: name});

       const token = jwt.sign({ email: result.email, id: result._id}, SECRET, { expiresIn: '1h'});
        
        res.status(200).json({ result, token});
    } catch (error) {   
        res.status(500).json({ message: 'Something wrong happened!'});
    }
}

