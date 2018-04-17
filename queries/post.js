var db = require('../database.js');
var randomString = require('../helpers/randomString.js');

//=============================================================================
// QUERIES
//=============================================================================

function getPost(req, res, next) {
  var postSlug = req.params.slug;
  var sql = "SELECT * FROM posts WHERE slug = $1;";

  db.one(sql, [postSlug])
    .then(function(data) {
      res.status(200)
        .json(data);
    }).catch(function(err) {
      next(err);
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
// EXPORTS
//=============================================================================

module.exports = {
  getPost: getPost,
  getPostComments: getPostComments
}
