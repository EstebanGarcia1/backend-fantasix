"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.createUser = exports.getUsers = void 0;
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma = new client_1.PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";
// 🧑‍💻 Obtener todos los usuarios
const getUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany({ select: { id: true, username: true, isAdmin: true } });
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener los usuarios" });
    }
};
exports.getUsers = getUsers;
// 📝 Registrar un usuario
const createUser = async (req, res) => {
    const { username, password, isAdmin } = req.body;
    try {
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        const newUser = await prisma.user.create({
            data: {
                username,
                password: hashedPassword,
                isAdmin: isAdmin || false,
            },
        });
        res.status(201).json({ id: newUser.id, username: newUser.username, isAdmin: newUser.isAdmin });
    }
    catch (error) {
        res.status(500).json({ error: "Error al registrar usuario" });
    }
};
exports.createUser = createUser;
// 🔑 Iniciar sesión
const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await prisma.user.findUnique({
            where: { username }
        });
        if (!user || user.password !== password) {
            return res.status(401).json({ error: "Credenciales incorrectas" });
        }
        // 📝 Guardamos en el log
        await prisma.systemLog.create({
            data: {
                message: `El usuario ${username} inició sesión`,
                eventType: "USER_LOGIN"
            }
        });
        res.json({ message: "Inicio de sesión exitoso", user });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al iniciar sesión" });
    }
};
exports.loginUser = loginUser;
