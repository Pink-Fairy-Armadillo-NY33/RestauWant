const User = require('../models/userModel');
const userController = {};


//Asynchronous put request to the database which returns the new User document
userController.createUser = async (req, res, next) => {
  try {
    // grab data from req body
    console.log('req.body, ', req.body);
    const { name, userName, password } = req.body; 
    // Create method to create a new user in db
    const temp = await User.create({name: name, userName: userName, password: password});
    res.locals.newUser = temp;
    return next();
  } catch (error) {
    console.log(error);
  }
};


//Asynchronous get request to the database which returns all User documents
userController.getAllUsers = async (req, res, next) => {
  // Find method to find all users
  try {
    await User.find({}, (err,users) => {
      if(err){
        return next(err);
      }
      res.locals.allRetrievedUsers = users;
      return next();

    });
  } catch (error) {
    console.log(error);
  }
};

userController.verifyUser = async (req, res, next) => {
  try {
    // grab data from req body
    console.log('req.body, ', req.body);
    const { userName, password } = req.body; 
    if (!userName || !password) return next('missing userName and/or password');
    // Create method to create a new user in db
    User.findOne({userName}, (err, user) => {
      if (err) { return next(err); }
      else if (!user) { return next('no user found'); }
      else {
        console.log('found user', user);
        if (user.password === password) {
          res.locals.user = user;
          return next();
        } else { return next('incorrect username/password'); }
      }
    });
  } catch (error) {
    console.log(error);
  }
};


//Asynchronous get request to the database which returns a User document based on name
userController.getUser = async (req, res, next) => {
  try{ 
  //find one 
    const {name} = req.params;
    // get name from req body 
    await User.findOne({name: name}, (err, user) => {
      if(err){
        return next(err);
      }
      res.locals.retrievedUser =  user;
      return next();

    });
  } catch (error) {
    console.log(error);
  }
};


//Asynchronous patch request to the database which updates and returns a User document based on name
userController.updateUser =  async (req, res, next) => {
  try{ 
  // grab name form request body
    await User.updateOne({name: req.params.name}, req.body, (err, updatedUser) => {
      if(err){
        return next(err);
      }
      res.locals.updatedUser = updatedUser;
      return next();
    });
  } catch (error) {
    console.log(error);
  }
};


//Asynchronous delete request to the database which deletes a User document based on name
userController.deleteUser = async (req, res, next) => {
  try{
    const {name} = req.body;
    await User.deleteOne({name: name}, (err, deletedUser) => {
      if(err || !deletedUser){
        return next(err);
      }
      return next();
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = userController;