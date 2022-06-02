const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  // name: {type: String},
  username: {type: String, required: true},
  password: {type: String, required: true},
  profilePicture: {type: String, default: 'https://cdn.discordapp.com/attachments/954781919302803534/980684613007585310/option-1.png'},
  // pastRestaurants: [{type: String}],
  // location: {
  //   latitude: {type: Number},
  //   longitude: {type: Number}
  // },
  // comments: [
  //   {
  //     comment: {type: String},
  //     restaurant_name: {type: String} 
  //   }
  // ]
});



module.exports = mongoose.model('User', userSchema);