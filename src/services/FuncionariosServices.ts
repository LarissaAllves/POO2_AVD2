import { getCustomRepository } from "typeorm";
import { FuncionariosRepository } from "../repositories/FuncionariosRepository";

interface IFuncionarioCreate {
  nome: string;
  cpf: string;
  funcao: string;
}

class FuncionariosServices {
  async create({ nome, cpf, funcao }: IFuncionarioCreate) {
    const funcionariosRepository = getCustomRepository(FuncionariosRepository);

    const funcionarios = funcionariosRepository.create({
      nome,
      cpf,
      funcao,
    });

    await funcionariosRepository.save(funcionarios);

    return funcionarios;
  }

  async index() {
    const funcionariosRepository = getCustomRepository(FuncionariosRepository);

    const funcionarios = await funcionariosRepository.find();

    return funcionarios;
  }
}

export { FuncionariosServices };
