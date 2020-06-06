const userRouter = require('express').Router();

const { getUser, createUser } = require('../controllers/users');

// import user services and other dependencies

module.exports = ({ httpRequest }) => {
  userRouter.get('/', httpRequest(getUser()));
  userRouter.post('/', httpRequest(createUser()));

  return userRouter;
};
