const { libraryProvider } = require('../providers');

const createLibrary = async (library) => {
    return await libraryProvider.createLibrary(library);
};

const getLibrary = async (libraryId) => {
    return await libraryProvider.getLibrary(libraryId);
}

module.exports = { createLibrary, getLibrary };