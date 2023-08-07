require('dotenv').config();

module.exports = {
  local: {
    url: process.env.DB_URL,
    dialect: 'postgres',
  },
  development: {
    url: process.env.DB_URL,
    dialect: 'postgres',
  },
  staging: {
    url: process.env.DB_URL,
    dialect: 'postgres',
  },
  production: {
    url: process.env.DB_URL,
    dialect: 'postgres',
  },
  test: {
    url: process.env.DB_URL_TEST,
    dialect: 'postgres',
  },
};
