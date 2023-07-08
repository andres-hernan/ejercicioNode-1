const express = require('express');
const router = express.Router();
const { bookController } = require('../controllers');
const { authMdw, userIsAdminMdw } = require('../middleware/auth-mdw');

//método post para dar de alta usuarios
router.post('/', userIsAdminMdw, bookController.createBook); 
router.get('/:userId', authMdw, bookController.getBook);



module.exports = router;