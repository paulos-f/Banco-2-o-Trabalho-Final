-- CreateTable
CREATE TABLE "HistoricoCliente" (
    "cod_historico" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cod_cliente" INTEGER NOT NULL,
    "cpf" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "sexo" TEXT NOT NULL,
    "dt_nascimento" DATETIME NOT NULL,
    "dt_cadastro" DATETIME NOT NULL,
    "num_contato" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "endereco" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "HistoricoCliente_cod_historico_key" ON "HistoricoCliente"("cod_historico");

-- CreateIndex
CREATE UNIQUE INDEX "HistoricoCliente_cpf_key" ON "HistoricoCliente"("cpf");
