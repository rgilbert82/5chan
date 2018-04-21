var db = require('../database.js');
var randomString = require('../helpers/randomString.js');
var async = require('async');

//=============================================================================
// QUERIES
//=============================================================================

function createComment(req, res, next) {
  var post_id     = req.body.post_id;
  var username    = req.body.username;
  var body        = req.body.body.trim();
  var image       = req.body.image;
  var sql = "INSERT INTO comments (post_id, username, body, image) VALUES ($1, $2, $3, $4) returning *;";

  db.one(sql, [post_id, username, body, image])
    .then(function(data) {
      res.status(200)
        .json(data);
    }).catch(function(err) {
      next(err);
    });
}

//=============================================================================

function deleteComment(req, res, next) {
  var cookie = req.headers.authorization;
  var token  = cookie ? cookie.replace('token=', '') : '';
  var commentID = req.params.id;

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
    // Then delete the comment
    function(admin, callback) {
      var sql = 'DELETE FROM comments WHERE id = $1;';
      db.result(sql, [commentID])
        .then(function(data) {
          callback(null, { status: 'success', message: 'comment deleted' });
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
  createComment: createComment,
  deleteComment: deleteComment
}
