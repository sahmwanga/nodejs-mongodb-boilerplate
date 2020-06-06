const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  port: process.env.PORT,
  db: { databaseUrl: process.env.DATABASE_URL },
  NODE_ENV: process.env.NODE_ENV,
};
