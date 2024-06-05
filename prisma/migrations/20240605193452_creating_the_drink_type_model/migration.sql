/*
  Warnings:

  - A unique constraint covering the columns `[drink_type_id]` on the table `Drink` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `drink_type_id` to the `Drink` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Drink" ADD COLUMN     "drink_type_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "DrinkType" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "DrinkType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Drink_drink_type_id_key" ON "Drink"("drink_type_id");

-- AddForeignKey
ALTER TABLE "Drink" ADD CONSTRAINT "Drink_drink_type_id_fkey" FOREIGN KEY ("drink_type_id") REFERENCES "DrinkType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
