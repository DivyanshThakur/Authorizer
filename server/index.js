import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRouter from './routes/authRouter.js';
import {getUsers} from './controllers/user.js';
import auth from './middleware/auth.js';

const app = express();

app.use(cors());
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));

app.use('/auth', authRouter);

app.get('/users', auth, getUsers);

app.get('/', (req, res) => {
    res.send('Hello from Authorizer API');
});


const PORT = process.env.PORT || 5000;
const URL = process.env.CONNECTION_URL;

mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
        .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);