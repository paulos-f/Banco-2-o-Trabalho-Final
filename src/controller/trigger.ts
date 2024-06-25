import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class Triggers {
  public async criaTriggerAoEditarCliente(req: Request, res: Response) {
    try {
      await prisma.$executeRawUnsafe(`
        CREATE TRIGGER trg_onupdate_cliente1
        AFTER UPDATE ON cliente
        BEGIN
            INSERT INTO historicoCliente (
                    cod_cliente,
                    cpf,
                    nome,
                    sexo,
                    dt_nascimento,
                    dt_cadastro,
                    num_contato,
                    email,
                    endereco
            )
            VALUES (
                NEW.cod_cliente,                   
                NEW.cpf,
                NEW.nome,
                NEW.sexo,
                NEW.dt_nascimento,
                NEW.dt_cadastro,
                NEW.num_contato,
                NEW.email,
                NEW.endereco
            );
        END;
      `);

      return res.send('Trigger criada com sucesso');
    } catch (error) {
      return res.send(error)
    }
  }
}

export default new Triggers();