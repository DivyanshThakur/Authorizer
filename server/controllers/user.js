import User from '../model/user.js';

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();

        if(!users) 
            res.status(404).json({message: "Users not found."});
        
        const userNames = users.map(user => user.name);

        res.status(200).json({result: userNames});
    } catch(e) {
        res.status(500).json({message: "Unknown error occurred."});
    }
}

export const logoutUser = async (req, res) => {
    req.logout();
    res.status(200).json({message: "Logout successful"});
}