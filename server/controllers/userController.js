const User = require('../models/userModel');

const userController = {};

//Asynchronous put request to the database which returns the new User document
userController.createUser = (req, res, next) => {
  // grab data from req body
  // console.log('req.body, ', req.body);
  const {username, password} = req.body;
  // Create method to create a new user in db
  User.create({
    username: username,
    password: password
  })
    .then((data) => {
      console.log('data: ', data);
      res.locals.newUser = data;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
  // User.create(req.body, (err,user) => {
  //   if(err){
  //     return next(err);
  //   }
  //   res.locals.newUser = user;
  //   return next();
  // });
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
userController.getUser = async (req, res, next) => {
  //find one 
  const {username, password} = req.body;
  console.log('username: ', username);
  console.log('password: ', password);
  // get name from req body 
  try {
    const user = await User.findOne({username: username});
    console.log(user);
    if (user.password === password) {
      res.locals.retrievedUser = {isLoggedIn: true, profilePicture: user.profilePicture, username: user.username};
      return next();
    }
  }
  catch(err) {
    res.locals.retrievedUser = false;
    return next(err);
  }
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