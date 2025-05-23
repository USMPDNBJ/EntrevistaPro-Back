import pool from "../config/db.js";    

export const getAllPagoService = async () =>{
    const result = await pool.query("SELECT * FROM t_pago");
    return  result.rows;
};
export const getPagoByIdService = async (id) =>{
    const result = await pool.query("SELECT * FROM t_pago where id_pago = $1", [id]);
    return  result.rows[0];
};
export const createPagoService = async ( nombre, fecha_expiracion, cvv, monto,  ) =>{
    const result = await pool.query("INSERT INTO t_pago (  nombre, fecha_expiracion, cvv, monto,  ) VALUES ($1, $2, $3, $4, $5) RETURNING *",
         [  nombre, fecha_expiracion, cvv, monto, ]);
         console.log()
    return  result.rows[0];
};
export const updatePagoService = async (  nombre, fecha_expiracion, cvv, monto,  id) =>{
    const result = await pool.query("UPDATE t_pago SET nombre=$1, fecha_expiracion=$2, cvv=$3, monto=$4 WHERE id=$5 RETURNING *",
        [  nombre, fecha_expiracion, cvv, monto,  id ]);
    return  result.rows[0];
};
export const deletePagoService = async (id) =>{
    const result = await pool.query("DELETE FROM t_pago where id = $1 RETURNING *", [id]);
    return  result.rows[0];
};