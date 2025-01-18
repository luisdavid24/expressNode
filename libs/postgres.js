const { Cliente } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'nico',
    password: 'admin123',
    database: 'my_store',
  });

  await client.connect();
  return Cliente;
}

module.exports = getConnection;
