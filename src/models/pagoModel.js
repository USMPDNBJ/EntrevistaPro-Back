import pool from "../config/db.js";    

export const getAllPagoService = async () =>{
    const result = await pool.query("SELECT * FROM t_pago");
    return  result.rows;
};
export const getPagoByIdService = async (id) =>{
    const result = await pool.query("SELECT * FROM t_pago where id_pago = $1", [id]);
    return  result.rows[0];
};
export const createPagoService = async ( numero_tarjeta, nombre, fecha_expiracion, cvv, monto  ) =>{
    const result = await pool.query("INSERT INTO t_pago (  numero_tarjeta, nombre, fecha_expiracion, cvv, monto) VALUES ($1, $2, $3, $4, $5) RETURNING *",
         [ numero_tarjeta, nombre, fecha_expiracion, cvv, monto ]);
         console.log()
    return  result.rows[0];
};
export const updatePagoService = async (  numero_tarjeta, nombre, fecha_expiracion, cvv, monto,  id) =>{
    const result = await pool.query("UPDATE t_pago SET numero_tarjeta=$1, nombre=$2, fecha_expiracion=$3, cvv=$4, monto=$5 WHERE id=$6 RETURNING *",
        [  numero_tarjeta, nombre, fecha_expiracion, cvv, monto,  id ]);
    return  result.rows[0];
};
export const deletePagoService = async (id) =>{
    const result = await pool.query("DELETE FROM t_pago where id = $1 RETURNING *", [id]);
    return  result.rows[0];
};