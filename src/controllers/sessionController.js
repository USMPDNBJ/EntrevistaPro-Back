import { createSessionService, deleteSessionService, getAllSessionService, getSessionByIdService, updateSessionService, getSessionByUserIdService } from "../models/sessionModel.js";

const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status,
        message,
        data,
    });
};

export const createSession = async (req, res, next) => {
    const { usuario_id, profesional_id, id_pago, fecha, hora_inicio, hora_fin, estado, evaluacion, enlace } = req.body;
    try {
        const newSession = await createSessionService(usuario_id, profesional_id, id_pago, fecha, hora_inicio, hora_fin, estado, evaluacion, enlace);
        handleResponse(res, 201, "Session created", newSession);
    } catch (err) {
        next(err);
    }
};

export const getAllSessions = async (req, res, next) => {
    try {
        const sessions = await getAllSessionService();
        handleResponse(res, 200, "Sessions fetched successfully", sessions);
    } catch (err) {
        next(err);
    }
};

export const getSessionById = async (req, res, next) => {
    try {
        const session = await getSessionByIdService(req.params.id);
        if (!session) return handleResponse(res, 404, "Session not found");
        handleResponse(res, 200, "Session fetched successfully", session);
    } catch (err) {
        next(err);
    }
};
export const getSessionByUserId = async (req, res, next) => {
    try {
        const session = await getSessionByUserIdService(req.params.id);
        if (!session) return handleResponse(res, 404, "Session not found");
        handleResponse(res, 200, "Session fetched successfully", session);
    } catch (err) {
        next(err);
    }
};

export const updateSession = async (req, res, next) => {
    const { usuario_id, profesional_id, id_pago, fecha, hora_inicio, hora_fin, estado, evaluacion, enlace } = req.body;
    try {
        const updatedSession = await updateSessionService(usuario_id, profesional_id, id_pago, fecha, hora_inicio, hora_fin, estado, evaluacion, enlace, req.params.id);
        if (!updatedSession) return handleResponse(res, 404, "Session not found");
        handleResponse(res, 200, "Session updated successfully", updatedSession);
    } catch (err) {
        next(err);
    }
};

export const deleteSession = async (req, res, next) => {
    try {
        const deletedSession = await deleteSessionService(req.params.id);
        if (!deletedSession) return handleResponse(res, 404, "Session not found");
        handleResponse(res, 200, "Session deleted successfully", deletedSession);
    } catch (err) {
        next(err);
    }
};
