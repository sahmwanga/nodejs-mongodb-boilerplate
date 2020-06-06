const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1', routes());

// Catch 404 error and forward them to error handle
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handle function
app.use((err, req, res) => {
  const status = err.status || 500;
  res.status(status).json({
    error: { message: err.message },
  });
});

// await loader(app);

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Server is running [::]:3000');
});
