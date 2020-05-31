const dotenv = require('dotenv');

dotenv.config();

export default {
  port: process.env.PORT,
  databaseUrl: process.env.DATABASE_URL,
};
