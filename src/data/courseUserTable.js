import pool from "../config/db.js"

const createCourseTable = async () => {
    const queryText = `
    CREATE TABLE IF NOT EXISTS t_courseUser (
    id SERIAL PRIMARY KEY,    
    id_course NUMBER,
    id_user NUMBER,
    creado_en DATE DEFAULT CURRENT_TIMESTAMP,
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