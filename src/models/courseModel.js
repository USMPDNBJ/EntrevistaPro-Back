import pool from "../config/db.js";

export const getAllCourseService = async () => {
    const result = await pool.query("SELECT id_course,  nombre, descripcion, profesional, duracion, precio, imagen FROM t_course");
    return result.rows;
};

export const getCourseByIdService = async (id) => {
    const result = await pool.query("SELECT id_course,nombre, descripcion2, categoria, profesional, duracion, horario, fecha_inicio, precio, etapas, imagen FROM t_course where id_course = $1", [id]);
    return result.rows[0];
};
export const getCourseRegisteredService = async (id) => {
    const result = await pool.query("SELECT nombre, categoria, profesional, duracion, horario, fecha_inicio, url FROM t_course tc INNER JOIN t_coursePayed tcp ON tc.id_course = tcp.id_course  where id_user = $1", [id]);
    return result.rows;
};

// Crear curso
export const createCourseService = async (
    nombre, descripcion, descripcion2, profesional,
    duracion, horario, fecha_inicio, precio,
    categoria, etapas, imagen, url
) => {
    const result = await pool.query(
        `INSERT INTO t_course (
            nombre, descripcion, descripcion2, profesional,
            duracion, horario, fecha_inicio, precio,
            categoria, etapas, imagen, url
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
        RETURNING *`,
        [
            nombre, descripcion, descripcion2, profesional,
            duracion, horario, fecha_inicio, precio,
            categoria, etapas, imagen, url
        ]
    );
    return result.rows[0];
};

// Actualizar curso
export const updateCourseService = async (
    id_course, nombre, descripcion, descripcion2, profesional,
    duracion, horario, fecha_inicio, precio, categoria,
    etapas, imagen, url
) => {
    const result = await pool.query(
        `UPDATE t_course SET
            nombre = $1,
            descripcion = $2,
            descripcion2 = $3,
            profesional = $4,
            duracion = $5,
            horario = $6,
            fecha_inicio = $7,
            precio = $8,
            categoria = $9,
            etapas = $10,
            imagen = $11,
            url = $12
         WHERE id_course = $13
         RETURNING *`,
        [
            nombre, descripcion, descripcion2, profesional,
            duracion, horario, fecha_inicio, precio,
            categoria, etapas, imagen, url, id_course
        ]
    );
    return result.rows[0];
};

// Eliminar curso
export const deleteCourseService = async (id_course) => {
    const result = await pool.query(
        "DELETE FROM t_course WHERE id_course = $1 RETURNING *",
        [id_course]
    );
    return result.rows[0];
};
