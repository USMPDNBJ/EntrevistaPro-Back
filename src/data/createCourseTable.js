import pool from "../config/db.js"

const createCourseTable = async () => {
    const queryText = `
    CREATE TABLE IF NOT EXISTS t_course (
    id_course SERIAL PRIMARY KEY,    
    nombre TEXT,
    descripcion TEXT,
    profesional TEXT,
    duracion TEXT,
    precio INTEGER,
    categoria TEXT,
    etapas TEXT[]
)
    `
    try {
        pool.query(queryText);
        console.log("Course table created")
    } catch (error) {
        console.log("Error creating user table", error)
    }
}
export default createCourseTable;