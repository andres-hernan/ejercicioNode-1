const express = require('express');
const router = express.Router();
const { userController } = require('../controllers');


//método post para dar de alta usuarios
router.post('/', userController.createUser); 
router.get('/:userId', userController.getUser);



module.exports = router;