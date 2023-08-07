const { Pool } = require('pg');

async function createDatabase(connectionString) {
  const pool = new Pool({
    connectionString,
  });

  return pool.connect();
}

module.exports = {
  createDatabase,
};
