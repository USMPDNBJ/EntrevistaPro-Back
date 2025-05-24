import pool from "../config/db.js"

const createUserTable = async () => {
    const queryText = `
    CREATE TABLE IF NOT EXISTS t_users (
    id SERIAL PRIMARY KEY,
    correo TEXT,
    contrasena TEXT,
    nombres TEXT,
    apellidos TEXT,
    dni TEXT,
    celular TEXT,
    habilidades TEXT[],
    rol TEXT
)
    `
    try {
        pool.query(queryText);
        console.log("User table created")
    } catch (error) {
        console.log("Error creating user table",error) 
    }
}
export default createUserTable;