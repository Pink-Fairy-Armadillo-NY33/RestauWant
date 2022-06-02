const express = require('express');
const session = require('express-session');
//const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const userController = require('./controllers/userController.js');
const cookieParser = require('cookie-parser');

const MONGO_URI =
  'mongodb+srv://harrygandalf:clearskysmongo@cluster0.kwayq.mongodb.net/test?retryWrites=true&w=majority';
//const MONGO_URI = 'mongodb+srv://project:scratchproject@cluster0.an6pg.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'restauwant',
});
mongoose.connection.once('open', () => {
  console.log('Connected to Mongo DB.');
});

app.use(session({ secret: 'cats' }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());
app.use(cookieParser());

const userRouter = require('./routers/userRouter');
const restaurantRouter = require('./routers/restaurantRouter');
const authRouter = require('./routers/authRouter'); // all authentication things related seperated into this router for clarity

app.use('/user', userRouter);
app.use('/api/restaurant', restaurantRouter);
app.use('/', authRouter);

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
