const jwt = require('jsonwebtoken');

// Middleware para verificar el token
function verificarToken(req, res, next) {
  // Obtener el token de los encabezados de la solicitud
  const token = req.header('Authorization');

  // Si no hay token, devolver un error 401
  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  // Quitar "Bearer " si está presente
  const tokenSinBearer = token.split(' ')[1];

  try {
    // Verificar el token usando el JWT_SECRET
    const decoded = jwt.verify(tokenSinBearer, process.env.JWT_SECRET);

    // Guardar la información decodificada del token en el objeto request para uso posterior
    req.user = decoded;

    // Continuar con la siguiente función (la ruta de la API)
    next();
  } catch (error) {
    // Si el token es inválido o ha expirado, devolver error 403
    console.error('Error de token:', error.message);
    res.status(403).json({ error: 'Token inválido' });
  }
}

module.exports = verificarToken;

