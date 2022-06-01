const userRouter = require('./routers/userRouter');
const restaurantRouter = require('./routers/restaurantRouter');
const express = require('express');
// const cors = require('cors')
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const userController = require('./controllers/userController.js');




const MONGO_URI = 'mongodb+srv://harrygandalf:clearskysmongo@cluster0.kwayq.mongodb.net/test?retryWrites=true&w=majority';
// const MONGO_URI = 'mongodb+srv://project:scratchproject@cluster0.an6pg.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'restauwant' });
mongoose.connection.once('open', () => {
  console.log('Connected to Mongo DB.');
}); 


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());





// OAUTH ENDPOINT
/*
passport.serializeUser(function(user, done) {
  console.log('user within serializeUser,', user);
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  console.log('user within deserializeUser,', obj);
  done(null, obj);
});
*/


// passport.serializeUser(function(user, done) {
//   console.log('user within serializeUser,', user.id);
//   done(null, user.githubId);
// });

// passport.deserializeUser(async function(id, done) {
//   console.log('user within deserializeUser,', id);
//   const user = await LoginUser.findById(id);
//   console.log("please work");
//   done(null, user);
// });

// passport.use(new GitHubStrategy({
//   clientID: process.env['GITHUB_CLIENT_ID'],
//   clientSecret: process.env['GITHUB_CLIENT_SECRET'],
//   callbackURL: '/api/auth/github/callback',
// }, 
// function(accessToken, refreshToken, profile, done) {
//   // process.nextTick(function () {
      
//   //   // To keep the example simple, the user's GitHub profile is returned to
//   //   // represent the logged-in user.  In a typical application, you would want
//   //   // to associate the GitHub account with a user record in your database,
//   //   // and return that user instead.
//   //   return done(null, profile);
//   // });
//   LoginUser.findOrCreate({githubId: profile.id}, function(err, user){
//     console.log('user within findOrCreate query, ', user);
//     //WE ARE HERE
//     return done(err, user);
//   });
// }));


app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials',true);
  next();
});
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Credentials',true);
  next();
});

app.use('/api/login', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/login.html'));
});

// app.use('/api/secret', (req, res, next) => {
//   return res.sendFile(path.join(__dirname, '/secret.html'));
// });

app.use('/api/secret', ensureAuthenticated);

function ensureAuthenticated(req, res, next) {
  console.log('req.session.passport.user', req.session.passport.user);
  console.log('req.isAuthenticated', req.user);
  //if (req.isAuthenticated()) { return res.sendFile(path.join(__dirname, '/secret.html')); }
  return res.redirect('/api/login');
}



// app.use('/api/secret', ensureAuthenticated, (req, res, next) => {
//   return res.sendFile(path.join(__dirname, '/secret.html'));
// });

// function ensureAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) { return next(); }
//   return res.redirect('/api/login');
// }
app.post('/test', userController.createUser,(req, res) => {
  res.send(201).json(res.locals.newUser);
}); 


app.get('/api/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

// app.get('/api/auth/github', passport.authenticate('github', { scope: [ 'user:email' ] }));

// app.get('/api/auth/github/callback', passport.authenticate('github', { failureRedirect: '/api/login' }),
//   function(req, res) {
//   // Successful authentication, redirect home.
//     res.redirect('/api/secret');
//   });






// USER ENDPOINT
// create a user router to handle all requests related to users in the database
// const userRouter = express.Router();

app.use('/api/user', userRouter);
app.use('/api/restaurant', restaurantRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('Not the page your looking for...'));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

const port = 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});