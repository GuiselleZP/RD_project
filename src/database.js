const mongoose = require('mongoose');

const {database} = require('./keys.js');

mongoose.connect(database.URI, {
  useNewUrlParser: true
})
  // promise that throws a message
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));
