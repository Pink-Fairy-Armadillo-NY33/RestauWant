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
  // implement a method to get the id of the user (mongoose creates an id for each user)
  const {id} = res.locals;
  console.log({ id: id, locals: res.locals });

  // create a cookie named 'ssid' with a value that is equal to the id of the user
  console.log({ stringId: String(id) });
  
  res.cookie('ssid', String(id), {httpOnly: true});
  return next();
};

module.exports = cookieController;