import pool from "../config/db.js"

const createUserTable = async () => {
    const queryText = `
    CREATE TABLE IF NOT EXISTS t_pago (
    id_pago SERIAL PRIMARY KEY,
    nombre TEXT,
    fecha_expiracion DATE,
    cvv TEXT,
    monto INTEGER
)
    `
    try {
        pool.query(queryText);
        console.log("Pago table created")
    } catch (error) {
        console.log("Error creating pago table",error) 
    }
}
export default createUserTable;