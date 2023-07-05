const { userProvider } = require('../providers');

const createUser = async (user) => {
    return await userProvider.createUser(user);
};

const getUser = async (user) => {
    return await userProvider.getUser(user);
}

module.exports = { createUser, getUser };