import express from "express";
import { createPago, deletePago, getAllPagos, getPagoById, updatePago } from "../controllers/pagoController.js";
const router = express.Router();

router.post("/pago", createPago);
router.get("/pago", getAllPagos);
router.get("/pago/:id", getPagoById);
router.put("/pago/:id", updatePago);
router.delete("/pago/:id", deletePago);

export default router;