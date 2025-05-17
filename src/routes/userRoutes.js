import express from "express";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser,verifiedUser,getAllWorkers } from "../controllers/userController.js";
import validateUser from "../middlewares/inputValidators.js"
const router = express.Router();

router.post("/user", createUser);
router.get("/user", getAllUsers);
router.get("/user/workers", getAllWorkers);
router.get("/user/:id", getUserById);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
router.post("/user/login", verifiedUser);

export default router;