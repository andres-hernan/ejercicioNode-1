const { Book } = require('../models');

const createBook = async (book) => {
    try {
        const newBook = await Book.create(book);
        return newBook;
    } catch(err) {
        console.error('Error when creating book', err);
        throw err;
    }
};

const getBook = async (bookId) => {
    try {
        const book = await Book.findByPk(bookId);
        return book;
    } catch (err) {
        console.error('Error when fetching book', err);
        throw err;
    }
};

const getAllBooks = async () => {
    try {
        const books = await Book.findAll();
        return books;
    } catch (err) {
        console.error('Error when fetching all books', err);
        throw err;
    }
};

const deleteBook = async (bookId) => {
    try {
        const book = await Book.findByPk(bookId);
        if (book) {
            await book.destroy(bookId);
        } else {
            throw new Error ('Book not found');
        }
    } catch (err) {
        console.error('Error when deleting book', err);
        throw err;
    }
};

const updateBook = async (bookId, updatedBook) => {
    try {
        const book = await Book.findByPk(bookId);
        if(book) {
            await book.update(updatedBook);
            return book;
        } else {
            throw new Error ('Book not found');
        }
    } catch (err) {
        console.error('Error when updating book', err);
        throw err;
    }
};


module.exports = { createBook, deleteBook, getBook, getAllBooks, updateBook }; 