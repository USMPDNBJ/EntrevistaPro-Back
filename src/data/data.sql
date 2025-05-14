CREATE TABLE IF NOT EXISTS t_users (
    id SERIAL PRIMARY KEY,
    correo TEXT,
    contrasena TEXT,
    nombres TEXT,
    apellidos TEXT,
    dni TEXT,
    celular TEXT,
    habilidades TEXT[]
);