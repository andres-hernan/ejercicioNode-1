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

const getLibrary = async (libraryId) => {
    try {
        const library = await Library.findByPk(libraryId, { include: { all: true }});
        return library;
    } catch (err) {
        console.error('Error when fetching library', err);
        throw err;
    }
};


const getAllLibraries = async () => {
    try {
        const library = await Library.findAll();
        return library;
    } catch (err) {
        console.error('Error when fetching all libraries', err);
        throw err;
    }
};

const deleteLibrary = async (libraryId) => {
    try {
        const library = await Library.findByPk(libraryId);
        if (library) {
            await library.destroy();
        } else {
            throw new Error ('Library not found');
        }
    } catch (err) {
        console.error('Error when deleting library', err);
        throw err;
    }
};

const updateLibrary = async (libraryId, updatedLibrary) => {
    try {
        const library = await Library.findByPk(libraryId);
        if(library) {
            await library.update(updatedLibrary);
            return library;
        } else {
            throw new Error ('Library not found');
        }
    } catch (err) {
        console.error('Error when updating library', err);
        throw err;
    }
};



module.exports = { createLibrary, deleteLibrary, getLibrary, getAllLibraries, updateLibrary }; 