const User = require('../models/userModel');

const userController = {};

//Asynchronous put request to the database which returns the new User document
userController.createUser = (req, res, next) => {
  // grab data from req body
  console.log('req.body, ', req.body);

  // Create method to create a new user in db
  User.create(req.body, (err,user) => {
    if(err){
      return next(err);
    }
    res.locals.newUser = user;
    return next();
  });
};

//Asynchronous get request to the database which returns all User documents
userController.getAllUsers = (req, res, next) => {
  // Find method to find all users
  User.find({}, (err,users) => {
    if(err){
      return next(err);
    }
    res.locals.allRetrievedUsers = users;
    return next();

  });
};

//Asynchronous get request to the database which returns a User document based on name
userController.getUser = (req, res, next) => {
  //find one 
  const {name} = req.params;
  // get name from req body 
  User.findOne({name: name}, (err, user) => {
    if(err){
      return next(err);
    }
    res.locals.retrievedUser =  user;
    return next();

  });
};

//Asynchronous patch request to the database which updates and returns a User document based on name
userController.updateUser =  (req, res, next) => {
  // grab name form request body
  User.updateOne({name: req.params.name}, req.body, (err, updatedUser) => {
    if(err){
      return next(err);
    }
    res.locals.updatedUser = updatedUser;
    return next();
  });
};

//Asynchronous delete request to the database which deletes a User document based on name
userController.deleteUser =  (req, res, next) => {
  const {name} = req.body;
  User.deleteOne({name: name}, (err, deletedUser) => {
    if(err || !deletedUser){
      return next(err);
    }
    return next();
  });
};

module.exports = userController;