import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../model/user.js';

export const login = async (req, res) => {
    const {email, password} = req.body;

    try {
        const existingUser = await User.findOne({email})
        ;
        if(!existingUser) 
            res.status(404).json({message: "User doesn't exists."});

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect)
            res.status(400).json({message: "Invalid credentials."});

        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, process.env.ENCRYPT_KEY, {expiresIn: '1h'});

        res.status(200).json({result: existingUser, token});

    } catch (e) {
        res.status(500).json({message: "Unable to login the user. Please try again later"})
    }
}

export const register = async (req, res) => {
    const {firstName, lastName, email, password, confirmPassword} = req.body;

    try {
        const existingUser = await User.findOne({email});

        if(existingUser) 
            res.status(400).json({message: "User already exists."});

        if(password !== confirmPassword)
            res.status(400).json({message: "Password don't match."});

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await User.create({name: `${firstName} ${lastName}`, email, password: hashedPassword});

        const token = jwt.sign({email: result.email, id: result._id}, process.env.ENCRYPT_KEY, {expiresIn: '1h'});

        res.status(200).json({result, token});

    } catch (e) {
        res.status(500).json({message: 'Unable to register the user. Please try again later'})
    }
}
