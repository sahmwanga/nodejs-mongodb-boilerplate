// const userRouter = require('express').Router();

// const { getUserController } = require('./get.users');

// // import user services and other dependencies

// module.exports = ({ httpRequest }) => {
//   userRouter.get('/', httpRequest(getUser()));
//   userRouter.get('/', httpRequest(getUser()));
//   userRouter.get('/', httpRequest(getUser()));

//   return userRouter;
// };

const { getUserController } = require('./get.users');
const { createUserController } = require('./create.users');
const { removeUserController } = require('./remove.user');
const { listUsersController } = require('./list.users');

module.exports = {
  getUserController,
  createUserController,
  removeUserController,
  listUsersController,
};
