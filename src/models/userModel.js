import pool from "../config/db.js";    

export const getAllUserService = async () =>{
    const result = await pool.query("SELECT * FROM t_users where rol = $1",['User']);
    return  result.rows;
};

export const getPerfilService = async (id) =>{
    const result = await pool.query("SELECT * FROM t_users  where id = $1", [id]);
    return  result.rows;
};

export const getUserByIdService = async (id) =>{
    const result = await pool.query("SELECT * FROM t_users where id = $1 and rol = $2", [id, 'User']);
    return  result.rows[0];
};
export const getWorkersService = async () =>{
    const result = await pool.query("SELECT * FROM t_users where rol = $1",['Worker']);
    return  result.rows;
};
export const verifiedUserService = async (correo, contrasena) =>{
    const result = await pool.query("SELECT id, rol FROM t_users where correo = $1 and contrasena = $2" , [correo,contrasena]);
    return  result.rows[0];
};
export const createUserService = async (correo, contrasena, nombres, apellidos, dni, celular, habilidades, rol, comentarios) =>{
    const result = await pool.query("INSERT INTO t_users (correo, contrasena, nombres, apellidos, dni, celular, habilidades, rol, comentarios) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
         [correo, contrasena, nombres, apellidos, dni, celular,habilidades, rol, comentarios]);
         console.log()
    return  result.rows[0];
};
export const updateUserService = async (correo, contrasena, nombres, apellidos, dni, celular, habilidades, comentarios, id) =>{
    const result = await pool.query("UPDATE t_users SET correo=$1, contrasena=$2, nombres=$3, apellidos=$4, dni=$5, celular=$6, habilidades=$7, comentarios=$8 WHERE id=$9 RETURNING *",
        [correo, contrasena, nombres, apellidos, dni, celular, habilidades, comentarios, id ]);
    return  result.rows[0];
};
export const deleteUserService = async (id) =>{
    const result = await pool.query("DELETE FROM t_users where id = $1 RETURNING *", [id]);
    return  result.rows[0];
};