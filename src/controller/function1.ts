import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class Function1 {
  public async modeloSinistroCausa(req: Request, res: Response) {
    try {
      await prisma.$executeRawUnsafe(`
        CREATE VIEW modelo_sinistro_causa AS
        WITH SinistroData AS (
            SELECT 
                m.nm_modelo, 
                COUNT(s.cod_sinistro) AS qtd_sinistros,
                (SELECT ts.desc_sinistro
                FROM sinistro s2
                JOIN tipo_sinistro ts ON s2.tp_sinistro = ts.tp_sinistro
                WHERE s2.cod_dispositivo = d.cod_dispositivo
                GROUP BY ts.desc_sinistro
                ORDER BY COUNT(s2.cod_sinistro) DESC
                LIMIT 1) AS causa_frequente
            FROM sinistro s
            JOIN dispositivo d ON s.cod_dispositivo = d.cod_dispositivo
            JOIN modelo m ON d.cod_modelo = m.cod_modelo
            GROUP BY m.nm_modelo, d.cod_dispositivo
        )
        SELECT
            nm_modelo,
            SUM(qtd_sinistros) AS qtd_sinistros,
            causa_frequente
        FROM SinistroData
        GROUP BY nm_modelo, causa_frequente
        ORDER BY qtd_sinistros DESC;
      `);

      return res.send('Função executada com sucesso!!!');
    } catch (error) {
      return res.send(error)
    }
  }
}

export default new Function1();