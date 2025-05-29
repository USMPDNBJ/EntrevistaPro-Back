import pool from "../config/db.js";


export const createCourseService = async (id_curso, id_user) => {
    const result = await pool.query("INSERT INTO t_courseUser (id_curso,id_user) VALUES ($1, $2) RETURNING *",
        [id_curso,id_user]);
    console.log()
    return result.rows[0];
}
export const getCourseUserByIdService = async (id) =>{
    const result = await pool.query("SELECT  categoria, profesional, duracion, horario, url FROM t_course where id_course = $1", [id]);
    return  result.rows[0];
};
// };

// export const updateCourseService = async (  id_curso,id_user,  id) =>{
//     const result = await pool.query("UPDATE t_course SET nombre=$1, descripcion=$2, instructor=$3, duracion=$4, precio=$5, categoria=$6, etapas=$7 WHERE id=$8 RETURNING *",
//         [  id_curso,id_user,  id ]);
//     return  result.rows[0];
// };

// export const deleteCourseService = async (id) =>{
//     const result = await pool.query("DELETE FROM t_course where id = $1 RETURNING *", [id]);
//     return  result.rows[0];
// };