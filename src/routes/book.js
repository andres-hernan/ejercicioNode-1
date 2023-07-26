const express = require('express');
const router = express.Router();
const { bookController } = require('../controllers');
const { authMdw, userIsAdminMdw } = require('../middleware/auth-mdw');

//métodos para acceder a recursos
router.get('/list', authMdw, bookController.getAllBooks);
router.get('/:bookId', authMdw, bookController.getBook);
router.post('/', userIsAdminMdw, bookController.createBook); 
router.put('/:bookId', userIsAdminMdw, bookController.updateBook);
router.delete('/:bookId', userIsAdminMdw, bookController.deleteBook);




module.exports = router;