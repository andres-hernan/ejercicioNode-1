const express = require('express');
const router = express.Router();
const { libraryController } = require('../controllers');
const { auth, userIsAdminMdw, authMdw} = require('../middleware/auth-mdw');

//método post para dar de alta usuarios
router.post('/', userIsAdminMdw, libraryController.createLibrary); 
router.get('/:libraryId', authMdw, libraryController.getLibrary);
router.get('/list', authMdw, libraryController.getAllLibraries);
router.put('/:libraryId', userIsAdminMdw, libraryController.updateLibrary);
router.delete('/:libraryId', userIsAdminMdw, libraryController.deleteLibrary);



module.exports = router;