"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const routes_1 = __importDefault(require("./routes"));
const logs_1 = __importDefault(require("./routes/logs"));
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
const port = process.env.PORT || 3001; // 👈 Esto faltaba
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/logs", logs_1.default);
app.use("/", routes_1.default);
app.get("/", (req, res) => {
    console.log("✅ Servidor en ejecución correctamente");
    res.send("Servidor funcionando");
});
async function testDBConnection() {
    try {
        await prisma.$connect();
        console.log("✅ Conectado a la base de datos correctamente");
    }
    catch (error) {
        console.error("❌ Error conectando a la base de datos:", error);
    }
}
testDBConnection();
app.listen(port, () => {
    console.log(`🔥 Servidor corriendo en http://localhost:${port}`);
});
