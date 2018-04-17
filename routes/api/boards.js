var express = require('express');
var router = express.Router();
var db = require('../../queries/board');

router.get('/', db.getAllBoards);
router.get('/:slug', db.getBoard);
router.get('/:id/posts', db.getBoardPosts);

module.exports = router;
