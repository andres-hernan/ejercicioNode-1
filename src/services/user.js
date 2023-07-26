const { userProvider } = require('../providers');

const createUser = async (user) => {
    console.log('SERVICES', user);
    return await userProvider.createUser(user);
};

const deleteUser = async (userId) => {
    return await userProvider.deleteUser(userId);
};

const getUser = async (userId) => {
    const user = await userProvider.getUser(userId);
    return user;
};

const getAllUsers = async() => {
    return await userProvider.getAllUsers();
};

const updateUser = async(userId, updatedUser) => {
    return await userProvider.updateUser(userId, updatedUser);
};

const validateUser = async (user, pass) => {
    const userFound = await userProvider.validateUser({ user, pass });
    return userFound;
};

module.exports = { createUser, deleteUser, getUser, getAllUsers , updateUser, validateUser};