/*
  Warnings:

  - You are about to drop the column `desc_avaliacao` on the `Tipo_sinistro` table. All the data in the column will be lost.
  - You are about to alter the column `dt_sinistro` on the `Sinistro` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.
  - Added the required column `nm_marca` to the `Marca` table without a default value. This is not possible if the table is not empty.
  - Added the required column `desc_sinistro` to the `Tipo_sinistro` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Marca" (
    "cod_marca" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cod_modelo" INTEGER NOT NULL,
    "nm_marca" TEXT NOT NULL,
    CONSTRAINT "Marca_cod_modelo_fkey" FOREIGN KEY ("cod_modelo") REFERENCES "Modelo" ("cod_modelo") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Marca" ("cod_marca", "cod_modelo") SELECT "cod_marca", "cod_modelo" FROM "Marca";
DROP TABLE "Marca";
ALTER TABLE "new_Marca" RENAME TO "Marca";
CREATE UNIQUE INDEX "Marca_cod_marca_key" ON "Marca"("cod_marca");
CREATE UNIQUE INDEX "Marca_cod_modelo_key" ON "Marca"("cod_modelo");
CREATE TABLE "new_Tipo_sinistro" (
    "tp_sinistro" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "desc_sinistro" TEXT NOT NULL
);
INSERT INTO "new_Tipo_sinistro" ("tp_sinistro") SELECT "tp_sinistro" FROM "Tipo_sinistro";
DROP TABLE "Tipo_sinistro";
ALTER TABLE "new_Tipo_sinistro" RENAME TO "Tipo_sinistro";
CREATE UNIQUE INDEX "Tipo_sinistro_tp_sinistro_key" ON "Tipo_sinistro"("tp_sinistro");
CREATE TABLE "new_Sinistro" (
    "cod_sinistro" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cod_dispositivo" INTEGER NOT NULL,
    "tp_sinistro" INTEGER NOT NULL,
    "dt_sinistro" DATETIME NOT NULL,
    CONSTRAINT "Sinistro_cod_dispositivo_fkey" FOREIGN KEY ("cod_dispositivo") REFERENCES "Dispositivo" ("cod_dispositivo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Sinistro_tp_sinistro_fkey" FOREIGN KEY ("tp_sinistro") REFERENCES "Tipo_sinistro" ("tp_sinistro") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Sinistro" ("cod_dispositivo", "cod_sinistro", "dt_sinistro", "tp_sinistro") SELECT "cod_dispositivo", "cod_sinistro", "dt_sinistro", "tp_sinistro" FROM "Sinistro";
DROP TABLE "Sinistro";
ALTER TABLE "new_Sinistro" RENAME TO "Sinistro";
CREATE UNIQUE INDEX "Sinistro_cod_sinistro_key" ON "Sinistro"("cod_sinistro");
CREATE UNIQUE INDEX "Sinistro_cod_dispositivo_key" ON "Sinistro"("cod_dispositivo");
CREATE UNIQUE INDEX "Sinistro_tp_sinistro_key" ON "Sinistro"("tp_sinistro");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
