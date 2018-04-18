var db = require('../database.js');
var randomString = require('../helpers/randomString.js');

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
// EXPORTS
//=============================================================================

module.exports = {
  createComment: createComment
}
