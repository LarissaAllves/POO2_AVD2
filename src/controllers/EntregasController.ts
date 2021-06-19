import { Request, Response } from "express";

import { EntregasServices } from "../services/EntregasServices";

class EntregasController {
  async create(request: Request, response: Response) {
    const { funcionario_id, nome_epi, data_entrega, quantidade_entregue } =
      request.body;
    const entregasServices = new EntregasServices();
    const entrega = await entregasServices.create({
      funcionario_id,
      nome_epi,
      data_entrega,
      quantidade_entregue,
    });
    return response.json(entrega);
  }

  async index(request: Request, response: Response) {
    const entregasServices = new EntregasServices();

    try {
      const entregas = await entregasServices.index();
      return response.json(entregas);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async show(request: Request, response: Response) {
    const entregaServices = new EntregasServices();
    const { id } = request.params;

    try {
      const entrega = await entregaServices.show({ id });
      return response.json(entrega);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async delete(request: Request, response: Response) {
    const entregaServices = new EntregasServices();
    const { id } = request.params;

    try {
      await entregaServices.delete({ id });
      return response.json({ message: "Id deletado com sucesso" });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async update(request: Request, response: Response) {
    const entregaServices = new EntregasServices();
    const { id } = request.params;
    const { funcionario_id, nome_epi, data_entrega, quantidade_entregue } =
      request.body;

    try {
      const entrega = await entregaServices.update(
        { id },
        { funcionario_id, nome_epi, data_entrega, quantidade_entregue }
      );
      return response.json(entrega);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
}

export { EntregasController };
