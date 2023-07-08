const { Library } = require('../models');

const createLibrary = async (library) => {
    try {
        const newLibrary = await Library.create(library);
        return newLibrary;
    } catch(err) {
        console.error('Error when creating library', err);
        throw err;
    }
};

/*
getUserByCriteria con options video 4 1:44:48
*/
const getLibrary = async (libraryId) => {
    try {
        const library = await Library.findByPk(libraryId, { include: { all: true }});
        return library;
    } catch (err) {
        console.error('Error when fetching library', err);
        throw err;
    }
};



module.exports = { createLibrary, getLibrary }; 