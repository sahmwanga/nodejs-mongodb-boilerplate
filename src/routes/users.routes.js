const userRouter = require('express').Router();

const {
  listUsersController,
  createUserController,
} = require('../controllers/users');

const { userService } = require('../services');

// import user services and other dependencies

module.exports = ({ httpRequest }) => {
  userRouter.get('/', httpRequest(listUsersController(userService)));
  userRouter.post('/', httpRequest(createUserController(userService)));

  return userRouter;
};
