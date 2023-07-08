const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const { authMdw, SERVER_SECRET } = require('../middleware/auth-mdw'); 
//seguir video 5 1:01:14
router.post('/', (req, res) => {
    const { user, pass } = req.body;
    if(user === 'admin' && pass === 'admin'){
        const token = jwt.sign({ user, role: 'Admin'}, SERVER_SECRET);
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Invalid user'});
    }
});


module.exports = router;