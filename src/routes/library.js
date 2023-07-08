const express = require('express');
const router = express.Router();
const { libraryController } = require('../controllers');
const { auth} = require('../middleware/auth-mdw');

//método post para dar de alta usuarios
router.post('/', libraryController.createLibrary); 
router.get('/:libraryId', libraryController.getLibrary);



module.exports = router;