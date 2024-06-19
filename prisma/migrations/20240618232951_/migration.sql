/*
  Warnings:

  - You are about to drop the `Pessoas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Pessoas";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Cliente" (
    "cod_cliente" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cpf" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "sexo" TEXT NOT NULL,
    "dt_nascimento" DATETIME NOT NULL,
    "dt_cadastro" DATETIME NOT NULL,
    "num_contato" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "endereco" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Modelo" (
    "cod_modelo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nm_modelo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Marca" (
    "cod_marca" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cod_modelo" INTEGER NOT NULL,
    CONSTRAINT "Marca_cod_modelo_fkey" FOREIGN KEY ("cod_modelo") REFERENCES "Modelo" ("cod_modelo") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Dispositivo" (
    "cod_dispositivo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cod_modelo" INTEGER NOT NULL,
    "cod_cliente" INTEGER NOT NULL,
    CONSTRAINT "Dispositivo_cod_cliente_fkey" FOREIGN KEY ("cod_cliente") REFERENCES "Cliente" ("cod_cliente") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Dispositivo_cod_modelo_fkey" FOREIGN KEY ("cod_modelo") REFERENCES "Modelo" ("cod_modelo") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Plano" (
    "cod_plano" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "desc_plano" TEXT NOT NULL,
    "valor" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Seguro" (
    "cod_seguro" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cod_cliente" INTEGER NOT NULL,
    "dt_inicio" DATETIME NOT NULL,
    "dt_fim" DATETIME NOT NULL,
    "cod_plano" INTEGER NOT NULL,
    CONSTRAINT "Seguro_cod_cliente_fkey" FOREIGN KEY ("cod_cliente") REFERENCES "Cliente" ("cod_cliente") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Seguro_cod_plano_fkey" FOREIGN KEY ("cod_plano") REFERENCES "Plano" ("cod_plano") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tipo_sinistro" (
    "tp_sinistro" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "desc_avaliacao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Sinistro" (
    "cod_sinistro" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cod_dispositivo" INTEGER NOT NULL,
    "tp_sinistro" INTEGER NOT NULL,
    "dt_sinistro" TEXT NOT NULL,
    CONSTRAINT "Sinistro_cod_dispositivo_fkey" FOREIGN KEY ("cod_dispositivo") REFERENCES "Dispositivo" ("cod_dispositivo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Sinistro_tp_sinistro_fkey" FOREIGN KEY ("tp_sinistro") REFERENCES "Tipo_sinistro" ("tp_sinistro") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_cod_cliente_key" ON "Cliente"("cod_cliente");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_cpf_key" ON "Cliente"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Modelo_cod_modelo_key" ON "Modelo"("cod_modelo");

-- CreateIndex
CREATE UNIQUE INDEX "Marca_cod_marca_key" ON "Marca"("cod_marca");

-- CreateIndex
CREATE UNIQUE INDEX "Marca_cod_modelo_key" ON "Marca"("cod_modelo");

-- CreateIndex
CREATE UNIQUE INDEX "Dispositivo_cod_dispositivo_key" ON "Dispositivo"("cod_dispositivo");

-- CreateIndex
CREATE UNIQUE INDEX "Dispositivo_cod_modelo_key" ON "Dispositivo"("cod_modelo");

-- CreateIndex
CREATE UNIQUE INDEX "Dispositivo_cod_cliente_key" ON "Dispositivo"("cod_cliente");

-- CreateIndex
CREATE UNIQUE INDEX "Plano_cod_plano_key" ON "Plano"("cod_plano");

-- CreateIndex
CREATE UNIQUE INDEX "Seguro_cod_seguro_key" ON "Seguro"("cod_seguro");

-- CreateIndex
CREATE UNIQUE INDEX "Seguro_cod_cliente_key" ON "Seguro"("cod_cliente");

-- CreateIndex
CREATE UNIQUE INDEX "Seguro_cod_plano_key" ON "Seguro"("cod_plano");

-- CreateIndex
CREATE UNIQUE INDEX "Tipo_sinistro_tp_sinistro_key" ON "Tipo_sinistro"("tp_sinistro");

-- CreateIndex
CREATE UNIQUE INDEX "Sinistro_cod_sinistro_key" ON "Sinistro"("cod_sinistro");

-- CreateIndex
CREATE UNIQUE INDEX "Sinistro_cod_dispositivo_key" ON "Sinistro"("cod_dispositivo");

-- CreateIndex
CREATE UNIQUE INDEX "Sinistro_tp_sinistro_key" ON "Sinistro"("tp_sinistro");
