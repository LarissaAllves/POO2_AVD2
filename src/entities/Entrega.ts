import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Funcionario } from "./Funcionario";
import { v4 as uuid } from "uuid";

@Entity("entregaEPI")
class Entrega {
  @PrimaryColumn()
  id: string;

  @Column()
  funcionario_id: string;

  @JoinColumn({ name: "funcionario_id" })
  @ManyToOne(() => Funcionario)
  funcionario: Funcionario;

  @Column()
  nome_epi: string;

  @Column()
  data_entrega: Date;

  @Column()
  quantidade_entregue: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Entrega };
