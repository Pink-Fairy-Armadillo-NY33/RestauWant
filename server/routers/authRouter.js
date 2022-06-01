const express = require('express');
const passport = require('passport');
const router = express.Router();
require('../auth');

const isLoggedIn = (req, res, next) => {
  console.log('Request User body: ',req.user);
  if (req.user) next();
  else res.sendStatus(401);
};

router.get('/', (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});
  
// whenever someone goes to this route, we want them to be authenticated i.e. sign in
// scope is what we want to retrieve from user profile 
// 'google' variable before scope means to use the Google Passport Strategy we defined in auth.js
router.get('/auth/google', passport.authenticate('google', {scope : ['email','profile']}));
  
// whenever someone successfully logs in  we get re-directed to this route
// this route was chosen in credentials when we got our Client ID and Client Secret
router.get('/google/callback', passport.authenticate('google', {
  successRedirect: '/protected',
  failureRedirect: '/auth/failure',
}));
  
router.get('/auth/failure', (req, res) => {
  res.send('Something went wrong...');
});

// can only access this route when user is logged in
router.get('/protected', isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user.displayName}!`);
});
  
// when user wants to log out they call this route
router.get('/logout', (req, res) => { 
  //req.logout(); //giving error...
  req.session.destroy();
  res.send('Goodbye!');
});

module.exports = router;