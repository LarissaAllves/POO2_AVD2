import { Request, Response } from "express";
import { FuncionariosServices } from "../services/FuncionariosServices";

class FuncionariosController {
  async create(request: Request, response: Response) {
    const { nome, cpf, funcao } = request.body;
    const funcionariosServices = new FuncionariosServices();
    const funcionarios = await funcionariosServices.create({
      nome,
      cpf,
      funcao,
    });

    return response.json(funcionarios);
  }

  async index(request: Request, response: Response) {
    const funcionariosServices = new FuncionariosServices();
    try {
      const funcionarios = await funcionariosServices.index();
      return response.json(funcionarios);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
}

export { FuncionariosController };
