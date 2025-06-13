import pool from "../config/db.js"

const createCoursePayedTable = async () => {
    
    const queryText = `
    CREATE TABLE IF NOT EXISTS t_coursePayed (
    id SERIAL PRIMARY KEY,    
    id_course INTEGER,
    id_user INTEGER,
    id_pago INTEGER,
    creado_en DATE DEFAULT CURRENT_TIMESTAMP
)
    `

    try {
        pool.query(queryText);
        console.log("CoursePayed table created")
    } catch (error) {
        console.log("Error creating user table", error)
    }
}

export default createCoursePayedTable;