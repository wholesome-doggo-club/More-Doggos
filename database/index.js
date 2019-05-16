const mongoose = require('mongoose');
const Doggo = require('../database/models.js');
mongoose.connect('mongodb://localhost/moredoggos', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to DB'));
db.once('open', () => console.log('Connection to mongo successful'));

const save = (doggo) => {
  Doggo.create(doggo, (err, dog) => {
    if (err) console.log(err); else {
      console.log(dog, ' saved');
    }
  });
}

const getDoggos = (number, callback) => {
  Doggo.find({}).limit(number).exec((err, data) => {
    callback(data);
  })
}

module.exports = { save, getDoggos }