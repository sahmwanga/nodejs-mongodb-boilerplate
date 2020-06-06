// const userRouter = require('express').Router();

// const { getUser } = require('./get.users');

// // import user services and other dependencies

// module.exports = ({ httpRequest }) => {
//   userRouter.get('/', httpRequest(getUser()));
//   userRouter.get('/', httpRequest(getUser()));
//   userRouter.get('/', httpRequest(getUser()));

//   return userRouter;
// };

const { getUser } = require('./get.users');
const { createUser } = require('./create.users');
const { removeUser } = require('./remove.user');

const { userService } = require('../../services');

module.exports = { getUser, createUser, removeUser };
