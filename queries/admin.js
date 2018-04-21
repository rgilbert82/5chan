var randomString = require('../helpers/randomString.js');
var db = require('../database.js');
var bcrypt = require('bcrypt');
var async = require('async');

//=============================================================================
// QUERIES
//=============================================================================

function getAdmin(req, res, next) {
  var cookie = req.headers.authorization;
  var token = cookie ? cookie.replace('token=', '') : '';
  var sql = "SELECT * FROM admins WHERE token = $1;";

  db.one(sql, [token])
    .then(function(data) {
      res.status(200)
        .json(data);
    }).catch(function(err) {
      next(err);
    });
}

//=============================================================================

function adminLogin(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  var sql = 'SELECT * FROM admins WHERE username = $1;';

  db.one(sql, [username])
    .then(function(data) {
      if (bcrypt.compareSync(password, data.password)) {
        res.status(200)
          .json({ token: data.token });
      } else {
        return next('Invalid username or password');
      }
    }).catch(function(err) {
      return next(err);
    });
}

//=============================================================================

function adminLogout(req, res, next) {
  var cookie = req.headers.authorization;
  var token = cookie ? cookie.replace('token=', '') : '';
  var newToken = randomString(32);
  var sql = 'UPDATE admins SET token = $2 WHERE token = $1 returning *;';

  db.one(sql, [token, newToken])
    .then(function(data) {
      res.status(200)
        .json({ status: 'SUCCESS', message: 'logged out' });
    }).catch(function(err) {
      return next(err);
    });
}

//=============================================================================
// EXPORTS
//=============================================================================

module.exports = {
  getAdmin: getAdmin,
  adminLogin: adminLogin,
  adminLogout: adminLogout
}
