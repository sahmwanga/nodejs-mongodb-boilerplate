const mongoose = require('mongoose');
const config = require('../config');

// Use ES6 Promises for mongoose
mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
// Set environment variables
const env = config.NODE_ENV;

if (env === 'production') {
  const username = ''; /** load this from .env */
  const password = '';
  mongoose.connect(
    `mongodb://${username}:${password}@ds161630.mlab.com:61630/passport`
  );
} else {
  mongoose.connect('mongodb://localhost:27017/boilerplate'),
    { useMongoClient: true };
}

// Signal connection
mongoose.connection
  .once('open', () => {
    console.log('Connection has been made');
  })
  .on('error', (error) => {
    console.log('Connect error', error);
  })
  .on('disconnected', () => {
    console.log('Connection disconnected');
  });

module.exports = mongoose;
