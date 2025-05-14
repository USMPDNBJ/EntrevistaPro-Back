import pool from "../config/db.js";    

export const getAllUserService = async () =>{
    const result = await pool.query("SELECT * FROM t_users");
    return  result.rows;
};
export const getUserByIdService = async (id) =>{
    const result = await pool.query("SELECT * FROM t_users where id = $1", [id]);
    return  result.rows[0];
};
export const verifiedUserService = async (correo, contrasena) =>{
    const result = await pool.query("SELECT * FROM t_users where correo = $1 and contrasena = $2" , [correo,contrasena]);
    return  result.rows[0];
};
export const createUserService = async (correo, contrasena, nombres, apellidos, dni, celular, habilidades) =>{
    const result = await pool.query("INSERT INTO t_users (correo, contrasena, nombres, apellidos, dni, celular, habilidades) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
         [correo, contrasena, nombres, apellidos, dni, celular,habilidades]);
         console.log()
    return  result.rows[0];
};
export const updateUsersService = async (correo, contrasena, nombres, apellidos, dni, celular, habilidades, id) =>{
    const result = await pool.query("UPDATE t_users SET correo=$1, contrasena=$2, nombres=$3, apellidos=$4, dni=$5, celular=$6, habilidades=$7 WHERE id=$8 RETURNING *",
        [correo, contrasena, nombres, apellidos, dni, celular, habilidades, id ]);
    return  result.rows[0];
};
export const deleteUsersService = async (id) =>{
    const result = await pool.query("DELETE FROM t_users where id = $1 RETURNING *", [id]);
    return  result.rows[0];
};