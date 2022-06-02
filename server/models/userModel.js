const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MONGO_URI = 'mongodb+srv://harrygandalf:clearskysmongo@cluster0.kwayq.mongodb.net/test?retryWrites=true&w=majority';

const userSchema = new Schema({
  name: {type: String},
  userName: {type: String, required: true},
  email: {type: String},
  password: {type: String, required: true},
  profilePicture: {type: String},
  pastResturants: [{type: String}],
  location: {
    latitude: {type: Number, required: false},
    longitude: {type: Number, required: false}
  },
  comments: [
    {
      user: {type: String, required: false},
      comment: {type: String,required: false},
      resturant_name: {type: String, required: false} 
    }
  ]
});


module.exports = mongoose.model('User', userSchema);