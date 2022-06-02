const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const User = require('./models/userModel');

const GOOGLE_CLIENT_ID = '565243218986-lgcfkqtr5g7jb9h69j67ef8klcl2faa9.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

// below is the Google Passport Strategy 
// whenever someone wants to authenticate it passes these details to Google 
passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:8080/google/callback',
  passReqToCallback: true
},
// this is what happens when someone successfully logs in
// we can create or find a user from a database here 
function(request, accessToken, refreshToken, profile, done) {
  //console.log(profile);
  //return done(null, profile);
  User.findOrCreate({name: profile.displayName}, {name: profile.displayName, userName: profile.email, password: '1234'}, (err, user) => {
    console.log(user);
    return done(err, user);
  }); 
}
));

// determines which data of the user object should be stored in the session (usually the user id) 
passport.serializeUser(function(user,done) {
  done(null, user); 
}); 

passport.deserializeUser(function(user,done) {
  done(null, user);
  //User.findById(id, function(err, user) {done(err, user)});
}); 