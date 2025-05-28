import express from "express";
import { createCourse, deleteCourse, getAllCourses, getCourseById, updateCourse } from "../controllers/courseController.js";
const router = express.Router();

router.post("/course", createCourse);
router.get("/course", getAllCourses);
router.get("/course/:id", getCourseById);
router.put("/course/:id", updateCourse);
router.delete("/course/:id", deleteCourse);

export default router;