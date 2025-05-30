import pool from "../config/db.js";

export const createCoursePayedService = async (id_course, id_user, id_pago) => {
    const result = await pool.query("INSERT INTO t_coursePayed (id_course,id_user,id_pago) VALUES ($1, $2, $3) RETURNING *",
        [id_course, id_user, id_pago]);
    console.log()
    return result.rows[0];
}