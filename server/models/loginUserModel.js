const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate');

const loginUserSchema = new Schema({
  githubId: {type: String, required: true},
});

loginUserSchema.plugin(findOrCreate);

module.exports = mongoose.model('LoginUser', loginUserSchema);