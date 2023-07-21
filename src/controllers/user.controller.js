const { userService, bookService } = require('../services');

const createUser = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body);
        res.json(newUser);        
    } catch (err) {
        res.status(500).json({ action: "createUser", error: err.message });
    }
};

const deleteUser = async (req, res) => {
    try { 
        await userService.deleteUser(req.params.userId);
        res.json({message: 'User deleted successfully'})
    } catch (err) {
        res.status(500).json({ action: 'deleteUser', error: err.message});
    }
};

const getUser = async (req, res) => {
    try {
        const user = await userService.getUser(req.params.userId);
        if(!user){
            res.status(404).json({ action: 'getUser', error: 'User not found' })
        } else {
            res.json(user);
        }

    } catch (err) {
        res.status(500).json({ action: "getUser", error: err.message });
    }
    
};

const getAllUsers = async (req, res) => {
    try {
        const books = await userService.getAllUsers();
        res.json(books);
    } catch (err) {
        res.status(500).json({ action: 'getAllBooks', error: err.message});
    }
};

const updateUser = async (req, res) => {
    try {
        const updatedUser = await userService.updateUser(req.params.userId, req.body);
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ action: 'updateUser', error: err.message});
    }
};



module.exports = { createUser, deleteUser, getUser, getAllUsers, updateUser };