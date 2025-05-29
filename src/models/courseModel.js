import pool from "../config/db.js";    

export const getAllCourseService = async () =>{
    const result = await pool.query("SELECT id_course,  nombre, descripcion, profesional, duracion, precio, url FROM t_course");
    return  result.rows;
};

export const getCourseByIdService = async (id) =>{
    const result = await pool.query("SELECT nombre, descripcion2, categoria, profesional, duracion, precio, etapas, url FROM t_course where id_course = $1", [id]);
    return  result.rows[0];
};

// export const createCourseService = async ( nombre, descripcion, descripcion2, instructor, duracion, precio, categoria, etapas  ) =>{
//     const result = await pool.query("INSERT INTO t_course (  nombre, descripcion, descripcion2, instructor, duracion, precio, categoria, etapas) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
//          [ nombre, descripcion, descripcion2, instructor, duracion, precio, categoria, etapas ]);
//          console.log()
//     return  result.rows[0];
// };

// export const updateCourseService = async (  nombre, descripcion, descripcion2, instructor, duracion, precio, categoria, etapas,  id) =>{
//     const result = await pool.query("UPDATE t_course SET nombre=$1, descripcion=$2, instructor=$3, duracion=$4, precio=$5, categoria=$6, etapas=$7 WHERE id=$8 RETURNING *",
//         [  nombre, descripcion, descripcion2, instructor, duracion, precio, categoria, etapas,  id ]);
//     return  result.rows[0];
// };

// export const deleteCourseService = async (id) =>{
//     const result = await pool.query("DELETE FROM t_course where id = $1 RETURNING *", [id]);
//     return  result.rows[0];
// };