import { createUserService, deleteUsersService, getAllUserService, getUserByIdService, updateUsersService, verifiedUserService } from "../models/userModel.js";

const handleResponse = (res, status, message, data = null)=>{
    res.status(status).json({
        status,
        message,
        data,
    })
}

export const createUser = async(req, res, next)=>{
    const {correo, contrasena, nombres, apellidos, dni, celular, habilidades} = req.body;
    try{
        const newUser = await createUserService(correo, contrasena, nombres, apellidos, dni, celular, habilidades);
        handleResponse(res, 201, "user created", newUser)
    }catch(err){
        next(err);
    }
}
export const getAllUsers = async(req, res, next)=>{
    try{
        const users = await getAllUserService();
        handleResponse(res, 201, "user created", users)
    }catch(err){
        next(err);
    }
}
export const getUserById  = async(req, res, next)=>{
    
    try{
        const user = await getUserByIdService(req.params.id);
        if(!user) return handleResponse(res,404,"User not found");
        handleResponse(res, 201, "user fetched successfully", user)   
    }catch(err){
        next(err);
    }
}
export const updateUser = async(req, res, next)=>{
    const {correo, contrasena, nombres, apellidos, dni, celular, habilidades} = req.body;
    try{
        const updatedUser = await updateUsersService(correo, contrasena, nombres, apellidos, dni, celular, habilidades,req.params.id);
        if(!updatedUser) return handleResponse(res,404,"User not found");
        handleResponse(res, 201, "User updated successfully", updatedUser)   
    }catch(err){
        next(err);
    }
}
export const deleteUser = async(req, res, next)=>{    
    try{
        const deletedUser = await deleteUsersService(req.params.id);
        if(!deletedUser) return handleResponse(res,404,"User not found");
        handleResponse(res, 201, "User deleted successfully", deletedUser)   
    }catch(err){
        next(err);
    }
}
export const verifiedUser = async(req, res, next)=>{    
    const {correo, contrasena} = req.body;
    try{
        const verifiedUser = await verifiedUserService(correo, contrasena);
        if(!verifiedUser) return handleResponse(res,404,"User not found");
        handleResponse(res, 201, "User verified successfully", verifiedUser)   
    }catch(err){
        next(err);
    }
}