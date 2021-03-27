import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.ENCRYPT_KEY);
        req.userId = decodedToken;
        next();
    } catch (error) {
        res.status(400).json({message: "Unauthorized user"});
    }
}

export default auth;