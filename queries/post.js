var db = require('../database.js');
var async = require('async');
var randomString = require('../helpers/randomString.js');

//=============================================================================
// QUERIES
//=============================================================================

function getPost(req, res, next) {
  var postSlug = req.params.slug;

  async.waterfall([
    // Get Post
    function(callback) {
      var sql = "SELECT * FROM posts WHERE slug = $1;";
      db.one(sql, [postSlug])
        .then(function(data) {
          callback(null, data);
        }).catch(function(err) {
          callback(err, null);
        });
    },
    // Then get the post's board
    function(post, callback) {
      var sql  = "SELECT * FROM boards WHERE id = $1;";
      var data = { post: post };
      db.one(sql, [post.board_id])
        .then(function(boardData) {
          data.board = boardData;
          callback(null, data);
        }).catch(function(err) {
          callback(err, null);
        });
    }
  ],
  function(err, results) {
    if (err) {
      return next(err);
    } else {
      res.status(200)
        .json(results);
    }
  });
}

//=============================================================================

function getPostComments(req, res, next) {
  var postID = req.params.id;
  var sql = "SELECT * FROM comments WHERE post_id = $1;";

  db.any(sql, [postID])
    .then(function(data) {
      res.status(200)
        .json(data);
    }).catch(function(err) {
      next(err);
    });
}

//=============================================================================

function createPost(req, res, next) {
  var board_id    = req.body.board_id;
  var username    = req.body.username;
  var body        = req.body.body.trim();
  var image       = req.body.image;
  var randomSlug  = randomString(20);
  var sql = "INSERT INTO posts (board_id, username, body, image, slug) VALUES ($1, $2, $3, $4, $5) returning *;";

  db.one(sql, [board_id, username, body, image, randomSlug])
    .then(function(data) {
      res.status(200)
        .json(data);
    }).catch(function(err) {
      next(err);
    });
}

//=============================================================================

function deletePost(req, res, next) {
  var cookie = req.headers.authorization;
  var token  = cookie ? cookie.replace('token=', '') : '';
  var postID = req.params.id;

  async.waterfall([
    // Verify admin is logged in
    function(callback) {
      var sql = "SELECT * FROM admins WHERE token = $1;";
      db.one(sql, [token])
        .then(function(data) {
          callback(null, data);
        }).catch(function(err) {
          callback(err, null);
        });
    },
    // Then delete the post
    function(admin, callback) {
      var sql = 'DELETE FROM posts WHERE id = $1;';
      db.result(sql, [postID])
        .then(function(data) {
          callback(null, { status: 'success', message: 'post deleted' });
        }).catch(function(err) {
          callback(err, null);
        });
    }
  ],
  function(err, results) {
    if (err) {
      return next(err);
    } else {
      res.status(200)
        .json(results);
    }
  });
}

//=============================================================================
// EXPORTS
//=============================================================================

module.exports = {
  createPost: createPost,
  getPost: getPost,
  getPostComments: getPostComments,
  deletePost: deletePost
}
