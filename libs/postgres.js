const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'my-store-postgres-1',
    port: 5432,
    user: 'nico',
    password: 'admin123',
    database: 'my_store',
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
