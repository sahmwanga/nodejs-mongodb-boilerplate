const express = require('express');
const userRouter = require('./users.routes');
const { httpRequest } = require('../middlewares');

const routersInit = () => {
  const router = express();

  router.use('/users', userRouter({ httpRequest }));

  return router;
};

module.exports = routersInit;
