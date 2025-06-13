import { createPagoService, deletePagoService, getAllPagoService, getPagoByIdService, updatePagoService } from "../models/pagoModel.js";

const handleResponse = (res, status, message, data = null)=>{
    res.status(status).json({
        status,
        message,
        data,
    })
}

export const createPago = async(req, res, next)=>{
    const { numero_tarjeta, nombre, fecha_expiracion, cvv, monto} = req.body;
    try{
        const newPago = await createPagoService( numero_tarjeta, nombre, fecha_expiracion, cvv, monto);
        handleResponse(res, 201, "pago created", newPago)
    }catch(err){
        next(err);
    }
}
export const getAllPagos = async(req, res, next)=>{
    try{
        const pagos = await getAllPagoService();
        handleResponse(res, 201, "pago created", pagos)
    }catch(err){
        next(err);
    }
}
export const getPagoById  = async(req, res, next)=>{
    
    try{
        const pago = await getPagoByIdService(req.params.id);
        if(!pago) return handleResponse(res,404,"Pago not found");
        handleResponse(res, 201, "pago fetched successfully", pago)   
    }catch(err){
        next(err);
    }
}
export const updatePago = async(req, res, next)=>{
    const { numero_tarjeta, nombre, fecha_expiracion, cvv, monto} = req.body;
    try{
        const updatedPago = await updatePagoService( numero_tarjeta, nombre, fecha_expiracion, cvv, monto,req.params.id);
        if(!updatedPago) return handleResponse(res,404,"Pago not found");
        handleResponse(res, 201, "Pago updated successfully", updatedPago)   
    }catch(err){
        next(err);
    }
}
export const deletePago = async(req, res, next)=>{    
    try{
        const deletedPago = await deletePagoService(req.params.id);
        if(!deletedPago) return handleResponse(res,404,"Pago not found");
        handleResponse(res, 201, "Pago deleted successfully", deletedPago)   
    }catch(err){
        next(err);
    }
}
