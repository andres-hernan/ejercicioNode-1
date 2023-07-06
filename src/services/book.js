const { bookProvider } = require('../providers');

const createBook = async (book) => {
    return await bookProvider.createBook(book);
};

const getBook = async (bookId) => {
    return await bookProvider.getBook(bookId);
}

module.exports = { createBook, getBook };