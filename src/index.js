const express = require('express');
const loader = require('./loaders');

const startServer = async () => {
  const app = express();

  await loader(app);

  app.listen(3000, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Server is running');
  });
};

startServer();
