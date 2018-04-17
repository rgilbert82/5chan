var express = require('express');
var router = express.Router();
var db = require('../../queries/post');

router.get('/:slug', db.getPost);
router.get('/:id/comments', db.getPostComments);

module.exports = router;
