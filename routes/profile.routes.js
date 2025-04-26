const express = require('express');
const router = express.Router();
const verificarToken = require('../middleware/auth.middleware');  // Importar el middleware

// Ruta de perfil (requiere autenticación)
router.get('/profile', verificarToken, async (req, res) => {
  const pool = req.app.get('pool');
  const userId = req.user.id;  // Obtener el id del usuario desde el token decodificado

  try {
    // Buscar usuario en la base de datos por id
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);

    // Si no se encuentra al usuario
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Enviar la información del usuario
    res.json({ user: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

module.exports = router;
