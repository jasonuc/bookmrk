/*
  Warnings:

  - A unique constraint covering the columns `[name,userId]` on the table `Shelf` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Shelf_name_userId_key" ON "Shelf"("name", "userId");