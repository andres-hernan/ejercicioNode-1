const { Op } = require("sequelize");
const { User } = require('../models');

const createUser = async (user) => {
    try {
        const newUser = await User.create(user);
        console.log('PROVIDERS', newUser);
        return newUser;
    } catch (err) {
        console.error('Error when creating user', err);
        throw err;
    }
};

const getUser = async (userId) => {
    try {
        const user = await User.findByPk(userId);
        return user;
    } catch (err) {
        console.error('Error when fetching user', err);
        throw err;
    }
};

/*
const getUserByCriteria = async (options) => {
    try {
        const user = await User.findAll({
            where: {
                [Op.or]: [
                    { firstName: options.firstName },
                    { lastName: options.lastName },
                ],
            },
        });
        return user;
    } catch (err) {
        console.error('Error when fetching user', err);
        throw err;
    }
};

*/

const validateUser = async (options) => {
    try {
        const user = await User.findAll({
            where: {
                email: options.user, password: options.pass,
            },
        });
        if (user.length !== 0) {
            return user;
        }
        return false;
    } catch (err) {
        console.error('Error when validating user', err);
        return false;
    }
};

const deleteUser = async (userId) => {
    try {
        const user = await User.findByPk(userId);
        if (user) {
            await user.destroy();
        } else {
            throw new Error ('User not found');
        }
    } catch (err) {
        console.error('Error when deleting user', err);
        throw err;
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        return users;
    } catch (err) {
        console.error('Error when fetching all users', err);
        throw err;
    }
};

const updateUser = async (userId, updatedUser) => {
    try {
        const user = await User.findByPk(userId);
        if (user) {
            await user.update(updatedUser);
            return user;
        } else {
            throw new Error ('User not found');
        }
    } catch (err) {
        console.error('Error when updating user', err);
        throw err;
    }
};



module.exports = { createUser, deleteUser, getUser, getAllUsers, updateUser, validateUser}; 