import { getAllCourseService, getCourseByIdService, createCourseService, updateCourseService, deleteCourseService,getCourseRegisteredService } from "../models/courseModel.js";

const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status,
        message,
        data,
    })
}

export const getAllCourses = async (req, res, next) => {
    try {
        const courses = await getAllCourseService(req.params.id);
     
        handleResponse(res, 201, "courses received", courses)
    } catch (err) {
        next(err);
    }
}

export const getCourseById = async (req, res, next) => {

    try {
        const course = await getCourseByIdService(req.params.id);        
        handleResponse(res, 201, "course fetched successfully", course)
    } catch (err) {
        next(err);
    }
}

export const getCourseRegistered = async (req, res, next) => {

    try {
        const course = await getCourseRegisteredService(req.params.id);
        if (!course) return handleResponse(res, 404, "Courses not found");
        handleResponse(res, 201, "course fetched successfully", course)
    } catch (err) {
        next(err);
    }
}
export const createCourse = async (req, res, next) => {
    const {
        nombre,
        descripcion,
        descripcion2,
        profesional,
        duracion,
        horario,
        fecha_inicio,
        precio,
        categoria,
        etapas,
        imagen,
        url
    } = req.body;

    try {
        const newCourse = await createCourseService(
            nombre, descripcion, descripcion2, profesional,
            duracion, horario, fecha_inicio, precio,
            categoria, etapas, imagen, url
        );
        handleResponse(res, 201, "Course created", newCourse);
    } catch (err) {
        next(err);
    }
};

export const updateCourse = async (req, res, next) => {
    const {
        nombre,
        descripcion,
        descripcion2,
        profesional,
        duracion,
        horario,
        fecha_inicio,
        precio,
        categoria,
        etapas,
        imagen,
        url
    } = req.body;

    try {
        const updatedCourse = await updateCourseService(
            req.params.id, nombre, descripcion, descripcion2, profesional,
            duracion, horario, fecha_inicio, precio,
            categoria, etapas, imagen, url
        );

        if (!updatedCourse) {
            return handleResponse(res, 404, "Course not found");
        }

        handleResponse(res, 200, "Course updated successfully", updatedCourse);
    } catch (err) {
        next(err);
    }
};

export const deleteCourse = async (req, res, next) => {
    try {
        const deletedCourse = await deleteCourseService(req.params.id);
        if (!deletedCourse) {
            return handleResponse(res, 404, "Course not found");
        }
        handleResponse(res, 200, "Course deleted successfully", deletedCourse);
    } catch (err) {
        next(err);
    }
};
