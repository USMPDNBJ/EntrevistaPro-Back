import express from "express";
import { getAllCourses, getCourseById, createCourse,updateCourse, deleteCourse, getCourseRegistered } from "../controllers/courseController.js";
import { createCoursePayed } from "../controllers/coursePayedController.js";
const router = express.Router();


router.get("/catalogo/:id", getAllCourses);
router.post("/course", createCourse);
// Obtener un curso por ID (GET)
router.get("/course/:id", getCourseById);
router.get("/courseRegistered/:id", getCourseRegistered);
// Actualizar un curso por ID (PUT)
router.put("/course/:id", updateCourse);
// Eliminar un curso por ID (DELETE)
router.delete("/course/:id", deleteCourse);
router.post("/coursePayed", createCoursePayed);

export default router;