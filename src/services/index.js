const db = require('../models');

const userService = require('./user.services');

module.exports = {
  userService: userService(db),
};
