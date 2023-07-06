const { User, Book } = require('../models');

const createBook = async (book) => {
    try {
        const newBook = await Book.create(book);
        return newBook;
    } catch(err) {
        console.error('Error when creating book', err);
        throw err;
    }
};

/*
getUserByCriteria con options video 4 1:44:48
*/
const getBook = async (bookId) => {
    try {
        const book = await Book.findByPk(bookId);
        return book;
    } catch (err) {
        console.error('Error when fetching book', err);
        throw err;
    }
};



module.exports = { createBook, getBook }; 