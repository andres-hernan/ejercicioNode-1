const express = require('express');
const router = express.Router();
const { bookController } = require('../controllers');
const { auth} = require('../middleware');

//método post para dar de alta usuarios
router.post('/', bookController.createBook); 
router.get('/:userId', bookController.getBook);



module.exports = router;