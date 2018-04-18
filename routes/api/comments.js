var express = require('express');
var router = express.Router();
var db = require('../../queries/comment');

router.post('/', db.createComment);

module.exports = router;
