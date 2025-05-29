import {  getAllCourseService, getCourseByIdService } from "../models/courseModel.js";

const handleResponse = (res, status, message, data = null)=>{
    res.status(status).json({
        status,
        message,
        data,
    })
}

// export const createCourse = async(req, res, next)=>{
//     const {  nombre, descripcion, instructor, duracion, precio, categoria, etapas} = req.body;
//     try{
//         const newCourse = await createCourseService(  nombre, descripcion, instructor, duracion, precio, categoria, etapas);
//         handleResponse(res, 201, "course created", newCourse)
//     }catch(err){
//         next(err);
//     }
// }
export const getAllCourses = async(req, res, next)=>{
    try{
        const courses = await getAllCourseService();
        handleResponse(res, 201, "courses received", courses)
    }catch(err){
        next(err);
    }
}

export const getCourseById  = async(req, res, next)=>{
    
    try{
        const course = await getCourseByIdService(req.params.id);
        if(!course) return handleResponse(res,404,"Course not found");
        handleResponse(res, 201, "course fetched successfully", course)   
    }catch(err){
        next(err);
    }
}
// export const updateCourse = async(req, res, next)=>{
//     const {  nombre, descripcion, instructor, duracion, precio, categoria, etapas} = req.body;
//     try{
//         const updatedCourse = await updateCourseService(  nombre, descripcion, instructor, duracion, precio, categoria, etapas,req.params.id);
//         if(!updatedCourse) return handleResponse(res,404,"Course not found");
//         handleResponse(res, 201, "Course updated successfully", updatedCourse)   
//     }catch(err){
//         next(err);
//     }
// }
// export const deleteCourse = async(req, res, next)=>{    
//     try{
//         const deletedCourse = await deleteCourseService(req.params.id);
//         if(!deletedCourse) return handleResponse(res,404,"Course not found");
//         handleResponse(res, 201, "Course deleted successfully", deletedCourse)   
//     }catch(err){
//         next(err);
//     }
// }
