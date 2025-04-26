const { Pool } = require('pg');
require('dotenv').config();

// Conexión a PostgreSQL
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Código SQL para crear la tabla
const createTableQuery = `
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  nombre TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

async function createTable() {
  try {
    await pool.query(createTableQuery);
    console.log('Tabla "users" creada exitosamente.');
  } catch (error) {
    console.error('Error creando tabla:', error);
  } finally {
    await pool.end();
  }
}

createTable();
