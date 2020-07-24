//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
var {
  User
} = require('../model/user');

router.get('/', isLoggedIn, function(req, res) {
  res.render('organization', {
    user: req.user
  });

});

function isLoggedIn(req, res, next) {
  try {
    if (req.isAuthenticated()) {
      req.isLogged = true;
      return next();
    }
    res.redirect('/login');
  } catch (e) {
    console.log(e);
  }
}

module.exports = router;