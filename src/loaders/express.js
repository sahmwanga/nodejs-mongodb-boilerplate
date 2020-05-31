// const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

module.exports = (app) => {
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.get('/', (req, res) => {
    res.status(200).end();
  });

  // more middleware

  return app;
};
