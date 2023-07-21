const { bookProvider } = require('../providers');

const createBook = async (book) => {
    return await bookProvider.createBook(book);
};

const deleteBook = async (bookId) => {
    return await bookProvider.deleteBook(bookId);
}

const getBook = async (bookId) => {
    const book = await bookProvider.getBook(bookId);
    return book;
};

const getAllBooks = async () => {
    return await bookProvider.getAllBooks();
};

const updateBook = async (bookId, updatedBook) => {
    return await bookProvider.updateBook(bookId, updatedBook);
}

module.exports = { createBook, deleteBook, getBook, getAllBooks, updateBook };