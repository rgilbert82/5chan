var db = require('../database.js');
var async = require('async');

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

  async.waterfall([
    // Get board
    function(callback) {
      var sql = "SELECT * FROM boards WHERE slug = $1;";
      db.one(sql, [boardSlug])
        .then(function(data) {
          callback(null, data);
        }).catch(function(err) {
          callback(err, null);
        });
    },
    // Get posts count
    function(board, callback) {
      var sql = "SELECT COUNT(id) AS post_count FROM posts WHERE board_id = $1;";
      db.one(sql, [board.id])
        .then(function(data) {
          board.post_count = data.post_count;
          callback(null, board);
        }).catch(function(err) {
          callback(err, null);
        });
    }
  ],
  function(err, results) {
    if (err) {
      return next(err);
    } else {
      console.log(results);
      res.status(200)
        .json(results);
    }
  });
}

//=============================================================================

function getBoardPosts(req, res, next) {
  var boardID = req.params.id;
  var page    = (req.query.page || 1) - 1;
  var first   = 1 + (page * 10);
  var last    = first + 9;
  var sql = "SELECT  * " +
            "FROM (" +
              "SELECT ROW_NUMBER() OVER (ORDER BY id DESC) AS RowNum, * " +
              "FROM posts" +
            ") AS RowConstrainedResult " +
            "WHERE board_id = $1 " +
            "AND RowNum    >= $2 " +
            "AND RowNum    <= $3 " +
            "ORDER BY RowNum;";

  db.any(sql, [boardID, first, last])
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
  getBoard: getBoard,
  getBoardPosts: getBoardPosts
}
