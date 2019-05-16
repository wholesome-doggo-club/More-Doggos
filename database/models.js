const mongoose = require('mongoose');

let doggoSchema = new mongoose.Schema({
  name: String,
  breed: String,
  age: String,
  gender: String,
  location: String,
  image: String
});

let Doggo = mongoose.model('Doggo', doggoSchema);

module.exports = Doggo;