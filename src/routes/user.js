const express = require('express');
const router = express.Router();
const { userController } = require('../controllers');
const { authMdw, userIsAdminMdw } = require('../middleware/auth-mdw');

//métodos para acceder a recursos

router.get('/list', userIsAdminMdw, userController.getAllUsers);
router.get('/:userId', userIsAdminMdw, userController.getUser);
router.post('/', userController.createUser); 
router.put('/:userId', authMdw, userController.updateUser);
router.delete('/:userId', userIsAdminMdw, userController.deleteUser);

module.exports = router;