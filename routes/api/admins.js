var express = require('express');
var router = express.Router();
var db = require('../../queries/admin');

router.get('/:id', db.getAdmin);
router.post('/login', db.adminLogin);
router.delete('/logout/:id', db.adminLogout);

module.exports = router;
