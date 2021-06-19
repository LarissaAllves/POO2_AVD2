import { Router } from "express";
import { FuncionariosController } from "./controllers/FuncionariosController";
import { EntregasController } from "./controllers/EntregasController";

const routes = Router();

const funcionariosController = new FuncionariosController();

const entregasController = new EntregasController();

//rotas de funcionarios

routes.post("/funcionarios", funcionariosController.create);
routes.get("/funcionarios", funcionariosController.index);

//rotas de entregas
routes.post("/entregaepi", entregasController.create);
routes.get("/entregaepi", entregasController.index);

routes.get("/entregaepi/:id", entregasController.show);
routes.delete("/entregaepi/:id", entregasController.delete);
routes.put("/entregaepi/:id", entregasController.update);

export { routes };
