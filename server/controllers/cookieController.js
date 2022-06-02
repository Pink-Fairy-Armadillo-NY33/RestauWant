const User = require('../models/userModel');
const cookieController = {};

/**
* setCookie - set a cookie with a random number
*/
cookieController.setCookie = async (req, res, next) => {
  res.cookie('secret', Math.floor(Math.random() * 100));
  return next();
};

/**
* setSSIDCookie - store the user id in a cookie
*/
cookieController.setSSIDCookie = async (req, res, next) => {
  res.cookie('ssid', res.locals.user.id, {httpOnly: true});
  return next();
};

module.exports = cookieController;