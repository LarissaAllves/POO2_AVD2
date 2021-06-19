import { Repository, EntityRepository } from "typeorm";

import { Entrega } from "../entities/Entrega";

@EntityRepository(Entrega)
class EntregasRepository extends Repository<Entrega> {}

export { EntregasRepository };
