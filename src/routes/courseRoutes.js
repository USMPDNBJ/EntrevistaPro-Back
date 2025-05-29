import express from "express";
import {   getAllCourses,  getCourseById} from "../controllers/courseController.js";
const router = express.Router();


router.get("/course", getAllCourses);
router.get("/course/:id", getCourseById);

export default router;