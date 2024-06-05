/*
  Warnings:

  - You are about to drop the column `nombre` on the `DrinkType` table. All the data in the column will be lost.
  - Added the required column `name` to the `DrinkType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DrinkType" DROP COLUMN "nombre",
ADD COLUMN     "name" TEXT NOT NULL;
