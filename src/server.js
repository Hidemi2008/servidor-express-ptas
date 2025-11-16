import express from "express";
import itensRoutes from "./routes/itens.routes.js";
import categoriasRoutes from "./routes/categorias.routes.js";
import usuariosRoutes from "./routes/usuarios.routes.js";

const app = express();
app.use(express.json());

app.use("/itens", itensRoutes);
app.use("/categorias", categoriasRoutes);
app.use("/usuarios", usuariosRoutes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
