/*
  Warnings:

  - You are about to drop the `Sales` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Sales" DROP CONSTRAINT "Sales_client_id_fkey";

-- DropForeignKey
ALTER TABLE "Sales" DROP CONSTRAINT "Sales_drink_id_fkey";

-- DropTable
DROP TABLE "Sales";

-- CreateTable
CREATE TABLE "Sale" (
    "id" SERIAL NOT NULL,
    "client_id" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SaleDetail" (
    "id" SERIAL NOT NULL,
    "sale_id" INTEGER NOT NULL,
    "drink_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "SaleDetail_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SaleDetail" ADD CONSTRAINT "SaleDetail_drink_id_fkey" FOREIGN KEY ("drink_id") REFERENCES "Drink"("id") ON DELETE CASCADE ON UPDATE CASCADE;
