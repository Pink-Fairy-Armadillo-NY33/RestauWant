const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {type: String},
  userName: {type: String},
  password: {type: String},
  profilePicture: {type: String},
  pastResturants: [{type: String}],
  location: {
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true}
  },
  comments: [
    {
      user: {type: String, required: true},
      comment: {type: String,required: true},
      resturant_name: {type: String, required: true} 
    }
  ]
});


module.exports = mongoose.model('User', userSchema);