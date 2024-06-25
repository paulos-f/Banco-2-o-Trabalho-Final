import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class Function2 {
  public async sinistroPlanoTaxa(req: Request, res: Response) {
    try {
      // Cria a view sinistros_ultimo_ano
      await prisma.$executeRawUnsafe(`
        CREATE VIEW IF NOT EXISTS sinistros_ultimo_ano AS
        SELECT
            s.cod_plano,
            COUNT(si.cod_sinistro) AS total_sinistros
        FROM
            seguro s
            INNER JOIN sinistro si ON s.cod_dispositivo = si.cod_dispositivo
        WHERE
            si.dt_sinistro >= date('now', '-1 year')
        GROUP BY
            s.cod_plano;
      `);

      // Cria a view cadastros_por_plano
      await prisma.$executeRawUnsafe(`
        CREATE VIEW IF NOT EXISTS cadastros_por_plano AS
        SELECT
            s.cod_plano,
            COUNT(s.cod_seguro) AS total_cadastros
        FROM
            seguro s
        GROUP BY
            s.cod_plano;
      `);

      // Cria a view fn_sinistros_por_plano_no_ultimo_ano
      await prisma.$executeRawUnsafe(`
        CREATE VIEW IF NOT EXISTS fn_sinistros_por_plano_no_ultimo_ano AS
        SELECT
            p.desc_plano,
            IFNULL(s.total_sinistros, 0) AS total_sinistros,
            c.total_cadastros,
            CASE
                WHEN c.total_cadastros > 0 THEN CAST(IFNULL(s.total_sinistros, 0) AS FLOAT) / c.total_cadastros
                ELSE 0
            END AS taxa_sinistros
        FROM
            plano p
            LEFT JOIN sinistros_ultimo_ano s ON p.cod_plano = s.cod_plano
            LEFT JOIN cadastros_por_plano c ON p.cod_plano = c.cod_plano;
      `);

      return res.send('Função executada com sucesso!!!');
    } catch (error) {
      return res.send(error)
    }
  }
}

export default new Function2();