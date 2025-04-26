const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const pool = new Pool({
  user: 'entrevistapro_user',
  host: 'dpg-d065rrili9vc73e1f5f0-a.oregon-postgres.render.com',
  database: 'entrevistapro',
  password: 'tSi7wwd7hvtXSdegvlcNxANxLVpO3Afw',
  port: 5432,
  ssl: { rejectUnauthorized: false },
});

async function insertarUsuario() {
  const nombre = 'Miguel';
  const email = 'miguel@gmail.com';
  const passwordPlano = '123456';

  // 👉 Encriptar la contraseña antes de insertarla
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(passwordPlano, salt);

  const query = `
    INSERT INTO users (nombre, email, password)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;

  try {
    const client = await pool.connect();
    console.log('Conexión establecida con la base de datos');
    const result = await client.query(query, [nombre, email, passwordHash]);
    console.log('Usuario insertado:', result.rows[0]);
    client.release();
  } catch (err) {
    console.error('Error detallado:', err.message, err.stack);
  } finally {
    await pool.end();
    console.log('Conexión cerrada');
  }
}

insertarUsuario();