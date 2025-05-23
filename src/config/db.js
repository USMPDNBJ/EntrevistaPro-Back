import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";
let pool = null
if (process.env.NODE_ENV === 'development') {
    dotenv.config({ path: '.env.development' });
    pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
    })
    console.log('Usuario de DB:', pool.options.user);
    console.log('Contraseña de DB:', pool.options.password);
    console.log('Host de DB:', pool.options.host);
    console.log('Base de datos:', pool.options.database);
    console.log('Puerto de DB:', pool.options.port);
    pool.on("connect", () => {
        console.log("conexión estable");
    })

} else if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: '.env.production' });
    pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        ssl: {
            rejectUnauthorized: false // solo para desarrollo
        }
    })
    console.log('Usuario de DB:', pool.options.user);
    console.log('Contraseña de DB:', pool.options.password);
    console.log('Host de DB:', pool.options.host);
    console.log('Base de datos:', pool.options.database);
    console.log('Puerto de DB:', pool.options.port);
    pool.on("connect", () => {
        console.log("conexión estable");

    })

}

export default pool