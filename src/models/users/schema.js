const { Schema } = require('mongoose');

// const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: {
    type: String,
    require: [true],
  },
  last_name: {
    type: String,
    require: [true],
  },
});

module.exports = { userSchema };
