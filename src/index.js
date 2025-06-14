import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import pool from "./config/db.js"
import userRoutes from "./routes/userRoutes.js"
import pagoRoutes from "./routes/pagoRoutes.js"
import sessionRoutes from "./routes/sessionRoutes.js"
import courseRoutes from "./routes/courseRoutes.js"
import errorHandling from "./middlewares/errorHandler.js"
import createUserTable from "./data/createUserTable.js"
import createSessionTable from "./data/createSessionTable.js"
import createPagoTable from "./data/createPagoTable.js"
import createCourseTable from "./data/createCourseTable.js"
import createCoursePayedTable from "./data/createCoursePayedTable.js"


dotenv.config();

const app = express()
const port = process.env.PORT
//Middlewares
app.use(express.json())
app.use(cors())

//Routes
app.use("/api",userRoutes)
app.use("/api",sessionRoutes)
app.use("/api",pagoRoutes)
app.use("/api",courseRoutes)

// Error handling middleware
app.use(errorHandling)
//Create table
// createUserTable()
// createSessionTable()
// createPagoTable()
// createCourseTable()
// createCoursePayedTable()


//Testing
app.get("/", async(req, res) => {
    console.log("Start")
    const result = await pool.query("SELECT current_database()")
    console.log(result)
    res.send(`the dabatase is ${result.rows[0].current_database}` )
})

app.listen(port, () => {

    console.log(`Serve is running:localhost:${port}`)
});

