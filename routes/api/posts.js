var express = require('express');
var router = express.Router();
var db = require('../../queries/post');

router.post('/', db.createPost);
router.get('/:slug', db.getPost);
router.get('/:id/comments', db.getPostComments);
router.delete('/:id', db.deletePost);

module.exports = router;
