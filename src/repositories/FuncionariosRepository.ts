import { Repository, EntityRepository } from "typeorm";
import { Funcionario } from "../entities/Funcionario";

@EntityRepository(Funcionario)
class FuncionariosRepository extends Repository<Funcionario> {}

export { FuncionariosRepository };
