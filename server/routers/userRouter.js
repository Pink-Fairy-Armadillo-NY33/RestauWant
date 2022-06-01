const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();



// Create a user in the database
// http://localhost:8080/user/
router.post('/', userController.createUser, (req, res) => {
  return res.send(res.locals.newUser);
});

// Get all users from the database
// http://localhost:8080/user/
router.get('/', userController.getAllUsers, (req, res) => {
  return res.send(res.locals.allRetrievedUsers);
});

// Get a specific user from the database
// http://localhost:8080/user/"name"
router.get('/:name', userController.getUser, (req, res) => {
  return res.send(res.locals.retrievedUser);
});

// Change a user's info
// http://localhost:8080/user/"name"
router.patch('/:name', userController.updateUser, (req, res) => {
  return res.send(res.locals.updatedUser);
});

// Delete a user from the database
// http://localhost:8080/user/"name"
router.delete('/:name', userController.deleteUser, (req, res) => {
  return res.send(JSON.stringify({message: 'This user is now dead bro'}));
});

module.exports = router;