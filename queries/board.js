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
// EXPORTS
//=============================================================================

module.exports = {
  getAllBoards: getAllBoards,
  getBoard: getBoard
}
