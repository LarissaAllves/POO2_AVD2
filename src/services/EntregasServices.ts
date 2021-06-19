import { getCustomRepository, createQueryBuilder } from "typeorm";
import { EntregasRepository } from "../repositories/EntregasRepository";

interface IEntregasCreate {
  funcionario_id: string;
  nome_epi: string;
  data_entrega: string;
  quantidade_entregue: number;
}

interface IEntregasId {
  id: string;
}

class EntregasServices {
  async create({
    funcionario_id,
    nome_epi,
    data_entrega,
    quantidade_entregue,
  }: IEntregasCreate) {
    const entregasRepository = getCustomRepository(EntregasRepository);

    const entrega = entregasRepository.create({
      funcionario_id,
      nome_epi,
      data_entrega: new Date(data_entrega),
      quantidade_entregue,
    });
    await entregasRepository.save(entrega);

    return entrega;
  }

  async index() {
    const entregasRepository = getCustomRepository(EntregasRepository);

    const entregas = await entregasRepository.find({
      relations: ["funcionario"],
    });

    return entregas;
  }

  async show({ id }: IEntregasId) {
    const entregaRepository = getCustomRepository(EntregasRepository);

    const entrega = await entregaRepository.findOne(
      { id },
      { relations: ["funcionario"] }
    );

    if (!entrega) {
      throw new Error(" ID não encontrado");
    }

    return entrega;
  }

  async delete({ id }: IEntregasId) {
    const entregasRepository = getCustomRepository(EntregasRepository);

    const entrega = await entregasRepository.findOne({ id });

    if (!entrega) {
      throw new Error("ID não encontrado");
    }

    return await entregasRepository.delete({ id });
  }

  async update(
    { id },
    {
      funcionario_id,
      nome_epi,
      data_entrega,
      quantidade_entregue,
    }: IEntregasCreate
  ) {
    const entregaRepository = getCustomRepository(EntregasRepository);

    let entrega = await entregaRepository.findOne({ id });

    if (!entrega) {
      throw new Error("ID não encontrado");
    }

    await entregaRepository.update(id, {
      funcionario_id,
      nome_epi,
      data_entrega,
      quantidade_entregue,
    });

    entrega = await entregaRepository.findOne({ id });

    return entrega;
  }
}

export { EntregasServices };
