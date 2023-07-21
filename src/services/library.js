const { libraryProvider } = require('../providers');

const createLibrary = async (library) => {
    return await libraryProvider.createLibrary(library);
};

const getLibrary = async (libraryId) => {
    return await libraryProvider.getLibrary(libraryId);
}

const getAllLibraries = async () => {
    return await libraryProvider.getAllLibraries();
};

const deleteLibrary = async (libraryId) => {
    return await libraryProvider.deleteLibrary(libraryId);
}

const updateLibrary = async (libraryId, updatedLibrary) => {
    return await libraryProvider.updateLibrary(libraryId, updatedLibrary);
}

module.exports = { createLibrary, deleteLibrary, getLibrary, getAllLibraries, updateLibrary };