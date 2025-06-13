import pool from "../config/db.js"

const createPagoTable = async () => {
    const queryText = `
    CREATE TABLE IF NOT EXISTS t_pago (
    id_pago SERIAL PRIMARY KEY,
    numero_tarjeta TEXT,
    nombre TEXT,
    fecha_expiracion DATE,
    cvv TEXT,
    monto INTEGER,
    numero tarjeta VARCHAR(20)
)
    `
    try {
        pool.query(queryText);
        console.log("Pago table created")
    } catch (error) {
        console.log("Error creating pago table",error) 
    }
}
export default createPagoTable;