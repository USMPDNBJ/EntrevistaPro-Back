import express from "express";
import { getAllCourses, getCourseById } from "../controllers/courseController.js";
import { createCoursePayed } from "../controllers/coursePayedController.js";
const router = express.Router();


router.get("/course", getAllCourses);
router.get("/course/:id", getCourseById);
router.post("/coursePayed", createCoursePayed);

export default router;