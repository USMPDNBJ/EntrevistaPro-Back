import pool from "../config/db.js"

const createSessionTable = async () => {
    const queryText = `
CREATE TABLE IF NOT EXISTS t_session (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER NOT NULL,
    profesional_id INTEGER,
    fecha DATE NOT NULL,
    hora_inicio TIME NOT NULL,
    hora_fin TIME NOT NULL,
    estado VARCHAR(50),
    evaluacion TEXT,  -- para guardar archivos PDF como binarios
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    enlace TEXT
);`
    try {
        pool.query(queryText);
        console.log("Session table created")
    } catch (error) {
        console.log("Error creating session table", error)
    }
}
export default createSessionTable;