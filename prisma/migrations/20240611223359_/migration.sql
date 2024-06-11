-- CreateTable
CREATE TABLE "Pessoas" (
    "cpf" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Pessoas_cpf_key" ON "Pessoas"("cpf");
