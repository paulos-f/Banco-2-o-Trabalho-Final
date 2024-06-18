import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class ComandoDML {
    public async popularBanco(req: Request, res: Response) {
        try {
            await prisma.$queryRawUnsafe(`
            INSERT INTO cliente (cod_cliente, cpf, nome, sexo, dt_nascimento, dt_cadastro, num_contato, email, endereco)
            VALUES
            (1, '12345678901', 'João da Silva', 'M', '1980-01-15', '2022-01-01', '11987654321', 'joao.silva@gmail.com', 'Rua A, 123'),
            (2, '23456789012', 'Maria Oliveira', 'F', '1990-02-20', '2022-02-01', '21987654321', 'maria.oliveira@gmail.com', 'Rua B, 456'),
            (3, '34567890123', 'Carlos Pereira', 'M', '1985-03-25', '2022-03-01', '31987654321', 'carlos.pereira@gmail.com', 'Rua C, 789'),
            (4, '45678901234', 'Ana Souza', 'F', '1995-04-30', '2022-04-01', '41987654321', 'ana.souza@gmail.com', 'Rua D, 101'),
            (5, '56789012345', 'Paulo Lima', 'M', '1988-05-10', '2022-05-01', '51987654321', 'paulo.lima@gmail.com', 'Rua E, 202'),
            (6, '67890123456', 'Fernanda Santos', 'F', '1992-06-15', '2022-06-01', '61987654321', 'fernanda.santos@gmail.com', 'Rua F, 303'),
            (7, '78901234567', 'Ricardo Gomes', 'M', '1983-07-20', '2022-07-01', '71987654321', 'ricardo.gomes@gmail.com', 'Rua G, 404'),
            (8, '89012345678', 'Juliana Costa', 'F', '1987-08-25', '2022-08-01', '81987654321', 'juliana.costa@gmail.com', 'Rua H, 505'),
            (9, '90123456789', 'Marcos Alves', 'M', '1981-09-30', '2022-09-01', '91987654321', 'marcos.alves@gmail.com', 'Rua I, 606'),
            (10, '01234567890', 'Bianca Machado', 'F', '1993-10-05', '2022-10-01', '01987654321', 'bianca.machado@gmail.com', 'Rua J, 707')
            ;
            
            INSERT INTO modelo (cod_modelo, nm_modelo)
            VALUES
            (1, 'Galaxy S21'),
            (2, 'iPhone 12'),
            (3, 'Moto G8'),
            (4, 'Xperia 5'),
            (5, 'Galaxy S20'),
            (6, 'iPhone 11'),
            (7, 'Moto G7'),
            (8, 'Xperia 4'),
            (9, 'Galaxy S10'),
            (10, 'iPhone X')
            ;
            
            INSERT INTO marca (cod_marca, cod_modelo, nm_marca)
            VALUES
            (1, 1, 'Samsung'),
            (2, 2, 'Apple'),
            (3, 3, 'Motorola'),
            (4, 4, 'Sony'),
            (5, 5, 'Samsung'),
            (6, 6, 'Apple'),
            (7, 7, 'Motorola'),
            (8, 8, 'Sony'),
            (9, 9, 'Samsung'),
            (10, 10, 'Apple')
            ;
            
            INSERT INTO dispositivo (cod_dispositivo, cod_modelo, cod_cliente)
            VALUES
            (1, 1, 1),
            (2, 2, 2),
            (3, 3, 3),
            (4, 4, 4),
            (5, 5, 5),
            (6, 6, 6),
            (7, 7, 7),
            (8, 8, 8),
            (9, 9, 9),
            (10, 10, 10)
            ;
            
            INSERT INTO plano (cod_plano, desc_plano, valor)
            VALUES
            (1, 'Plano Básico', 29.99),
            (2, 'Plano Intermediário', 49.99),
            (3, 'Plano Avançado', 69.99),
            (4, 'Plano Premium', 89.99),
            (5, 'Plano Família', 109.99),
            (6, 'Plano Corporativo', 199.99),
            (7, 'Plano Estudante', 19.99),
            (8, 'Plano Jovem', 39.99),
            (9, 'Plano Sênior', 59.99),
            (10, 'Plano Completo', 79.99)
            ;
            
            INSERT INTO seguro (cod_seguro, cod_cliente, dt_inicio, dt_fim, cod_plano)
            VALUES
            (1, 1, '2022-01-01', '2023-01-01', 1),
            (2, 2, '2022-02-01', '2023-02-01', 2),
            (3, 3, '2022-03-01', '2023-03-01', 3),
            (4, 4, '2022-04-01', '2023-04-01', 4),
            (5, 5, '2022-05-01', '2023-05-01', 5),
            (6, 6, '2022-06-01', '2023-06-01', 6),
            (7, 7, '2022-07-01', '2023-07-01', 7),
            (8, 8, '2022-08-01', '2023-08-01', 8),
            (9, 9, '2022-09-01', '2023-09-01', 9),
            (10, 10, '2022-10-01', '2023-10-01', 10)
            ;
            
            INSERT INTO tipo_sinistro (tp_sinistro, desc_sinistro)
            VALUES
            (1, 'Roubo'),
            (2, 'Furto'),
            (3, 'Dano Acidental'),
            (4, 'Perda'),
            (5, 'Dano por Água'),
            (6, 'Queda'),
            (7, 'Incêndio'),
            (8, 'Dano Elétrico'),
            (9, 'Desgaste'),
            (10, 'Defeito de Fábrica')
            ;
            
            INSERT INTO sinistro (cod_sinistro, cod_dispositivo, tp_sinistro, dt_sinistro)
            VALUES
            (1, 1, 1, '2022-05-01'),
            (2, 2, 2, '2022-06-01'),
            (3, 3, 3, '2022-07-01'),
            (4, 4, 1, '2022-08-01'),
            (5, 5, 2, '2022-09-01'),
            (6, 6, 3, '2022-10-01'),
            (7, 7, 1, '2022-11-01'),
            (8, 8, 2, '2022-12-01'),
            (9, 9, 3, '2023-01-01'),
            (10, 10, 1, '2023-02-01')
            ;
            `);

            return res.send("Tabela populada com sucesso!")
        } catch (error) {
            return res.send(error)
        }
    }
}

export default new ComandoDML();