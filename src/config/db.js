import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";
dotenv.config();
const pool = new Pool({
    user: process.env.example.DB_USER,
    host: process.env.example.DB_HOST,
    database: process.env.example.DB_DATABASE,
    password: process.env.example.DB_PASSWORD,
    port: process.env.example.DB_PORT,
})
pool.on("connect", () => {
    console.log("conexión estable");
})
export default pool;