var db = require('../database.js');

//=============================================================================
// QUERIES
//=============================================================================

function getAllBoards(req, res, next) {
  var sql = "SELECT * FROM boards;";

  db.any(sql)
    .then(function(data) {
      res.status(200)
        .json(data);
    }).catch(function(err) {
      return next(err);
    });
}

//=============================================================================

function getBoard(req, res, next) {
  var boardSlug = req.params.slug;
  var sql = "SELECT * FROM boards WHERE slug = $1;";

  db.one(sql, [boardSlug])
    .then(function(data) {
      res.status(200)
        .json(data);
    }).catch(function(err) {
      next(err);
    });
}

//=============================================================================

function getBoardPosts(req, res, next) {
  var boardID = req.params.id;
  var sql = "SELECT * FROM posts WHERE board_id = $1;";

  db.any(sql, [boardID])
    .then(function(data) {
      res.status(200)
        .json(data);
    }).catch(function(data) {
      next(err);
    });
}

//=============================================================================
// EXPORTS
//=============================================================================

module.exports = {
  getAllBoards: getAllBoards,
  getBoard: getBoard,
  getBoardPosts: getBoardPosts
}
