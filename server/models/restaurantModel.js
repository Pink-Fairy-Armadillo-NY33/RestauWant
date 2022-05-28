const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: {type: String, required: true},
  rating: {type: Number, required: true},
  review_count: {type: Number, required: true},
  price: {type: String, required: true},
  coordinates: {
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true}
  },
  categories: [
    {
      alias: {type: String, required: true},
      title: {type: String, required: true}
    }
  ]
});

module.exports = mongoose.model('Restaurant', restaurantSchema);

//API will also return img property and distance property