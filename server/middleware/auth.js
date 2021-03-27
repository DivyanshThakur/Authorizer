import jwt from 'jsonwebtoken';
import User from '../model/user.js';

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.ENCRYPT_KEY);

        const user = await User.findById(decodedToken.id);
        
        if(decodedToken.id !== String(user._id)) {
            res.status(400).json({message: "Unauthorized user"});
        }

        next();
    } catch (error) {
        res.status(400).json({message: "Unauthorized user"});
    }
}

export default auth;