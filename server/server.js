const express = require('express');
const app = express();
const port = 8080;

const mongoose = require('mongoose');
const userController = require('./controllers/userController');
const restaurantController = require('./controllers/restaurantController');
const MONGO_URI = "mongodb+srv://project:scratchproject@cluster0.an6pg.mongodb.net/?retryWrites=true&w=majority"

// mongoose.connect("mongodb+srv://lilkobe:scratchproject@cluster0.an6pg.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true}, {useUnifiedTopology: true});
// mongoose.connection.once('open', () => {
//     console.log('Connected to Database');
//   });


  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'ResturantDb'
})
    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log(err));

app.use(express.json());

// USER ENDPOINT
// create a user router to handle all requests related to users in the database
const userRouter = express.Router();
app.use('/api/user', userRouter);

// Create a user in the database
// http://localhost:8080/user/
userRouter.post('/', userController.createUser, (req, res) => {
    return res.send(res.locals.newUser)
});

// Get all users from the database
// http://localhost:8080/user/
userRouter.get('/', userController.getAllUsers, (req, res) => {
    return res.send(res.locals.allRetrievedUsers)
});

// Get a specific user from the database
// http://localhost:8080/user/"name"
userRouter.get('/:name', userController.getUser, (req, res) => {
    return res.send(res.locals.retrievedUser)
});

// Change a user's info
// http://localhost:8080/user/"name"
userRouter.patch('/:name', userController.updateUser, (req, res) => {
    return res.send(res.locals.updatedUser)
});

// Delete a user from the database
// http://localhost:8080/user/"name"
userRouter.delete('/:name', userController.deleteUser, (req, res) => {
    return res.send(JSON.stringify({message: "This user is now dead bro"}))
});



// RESTAURANT ENDPOINT
// restaurant router to handle all requests related to restaurants in the database
const restaurantRouter = express.Router();
app.use('/api/restaurant', restaurantRouter);

// Create a restaurant in the database
// http://localhost:8080/restaurant/
restaurantRouter.post('/', restaurantController.createRestaurant, (req, res) => {
    return res.send(res.locals.newRestaurant)
});

// Get all restaurants from the database
// http://localhost:8080/restaurant/
restaurantRouter.get('/', restaurantController.getAllRestaurants, (req, res) => {
    return res.send(res.locals.allRetrievedRestaurants)
});

// Get a specific restaurant from the database
// http://localhost:8080/restaurant/"name"
restaurantRouter.get('/:name', restaurantController.getRestaurant, (req, res) => {
    return res.send(res.locals.retrievedRestaurant)
});

// Change a restaurant's info
// http://localhost:8080/restaurant/"name"
restaurantRouter.patch('/:name', restaurantController.updateRestaurant, (req, res) => {
    return res.send(res.locals.updatedRestaurant)
});

// Delete a restaurant from the database
// http://localhost:8080/restaurant/"name"
restaurantRouter.delete('/:name', restaurantController.deleteRestaurant, (req, res) => {
    return res.send(JSON.stringify({message: "This restaurant is bankrupt bro"}))
});

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('One page at a time please, we can only code so much in three days'));

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

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})