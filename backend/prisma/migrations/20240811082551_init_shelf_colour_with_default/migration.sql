/*
  Warnings:

  - A unique constraint covering the columns `[name,userId,colour]` on the table `Shelf` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Shelf_name_userId_key";

-- AlterTable
ALTER TABLE "Shelf" ADD COLUMN     "colour" TEXT NOT NULL DEFAULT '#ffffff';

-- CreateIndex
CREATE UNIQUE INDEX "Shelf_name_userId_colour_key" ON "Shelf"("name", "userId", "colour");
