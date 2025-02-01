import express from "express";
import { getUsers, createUser, loginUser } from "../controllers/usersController";

const router = express.Router();

router.get("/", getUsers); // Obtener todos los usuarios
router.post("/register", createUser); // Registrar un usuario
router.post("/login", loginUser); // Iniciar sesión

export default router;
