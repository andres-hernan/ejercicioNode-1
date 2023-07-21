const express = require('express');
const router = express.Router();
const { userController } = require('../controllers');
const { authMdw, userIsAdminMdw } = require('../middleware/auth-mdw');

//método post para dar de alta usuarios
router.post('/', userController.createUser); 
router.get('/:userId', userIsAdminMdw, userController.getUser);
router.get('/list', userIsAdminMdw, userController.getAllUsers);
router.put('/:userId', authMdw, userController.updateUser);
router.delete('/:userId', authMdw, userController.deleteUser);

module.exports = router;