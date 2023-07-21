const express = require('express');
const router = express.Router();
const { bookController } = require('../controllers');
const { authMdw, userIsAdminMdw } = require('../middleware/auth-mdw');

//método post para dar de alta usuarios
router.post('/', userIsAdminMdw, bookController.createBook); 
router.get('/:bookId', authMdw, bookController.getBook);
router.get('/list', authMdw, bookController.getAllBooks);
router.put('/:bookId', userIsAdminMdw, bookController.updateBook);
router.delete('/:bookId', userIsAdminMdw, bookController.deleteBook);




module.exports = router;