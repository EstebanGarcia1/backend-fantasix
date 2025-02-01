import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

// 🧑‍💻 Obtener todos los usuarios
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({ select: { id: true, username: true, isAdmin: true } });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
};

// 📝 Registrar un usuario
export const createUser = async (req: Request, res: Response) => {
  const { username, password, isAdmin } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        isAdmin: isAdmin || false,
      },
    });

    res.status(201).json({ id: newUser.id, username: newUser.username, isAdmin: newUser.isAdmin });
  } catch (error) {
    res.status(500).json({ error: "Error al registrar usuario" });
  }
};

// 🔑 Iniciar sesión
export const loginUser = async (req: Request, res: Response) => {
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
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al iniciar sesión" });
  }
};

