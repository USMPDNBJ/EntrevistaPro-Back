import express from "express";
import { createSession, deleteSession, getAllSessions, getSessionById, updateSession,getSessionByUserId } from "../controllers/sessionController.js";

const router = express.Router();

// Crear una nueva sesión
router.post("/session",  createSession);

// Obtener todas las sesiones
router.get("/session", getAllSessions);

// Obtener una sesión por ID
router.get("/session/:id", getSessionById);

router.get("/session/user/:id", getSessionByUserId);

// Actualizar una sesión existente
router.put("/session/:id", updateSession);

// Eliminar una sesión
router.delete("/session/:id", deleteSession);

export default router;
