const express = require('express');
const router = express.Router();
const { libraryController } = require('../controllers');
const { auth, userIsAdminMdw, authMdw} = require('../middleware/auth-mdw');

//métodos para acceder a recursos
router.get('/list', authMdw, libraryController.getAllLibraries);
router.get('/:libraryId', authMdw, libraryController.getLibrary);
router.post('/', userIsAdminMdw, libraryController.createLibrary); 
router.put('/:libraryId', userIsAdminMdw, libraryController.updateLibrary);
router.delete('/:libraryId', userIsAdminMdw, libraryController.deleteLibrary);



module.exports = router;