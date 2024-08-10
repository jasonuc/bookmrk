/*
  Warnings:

  - Made the column `shelfId` on table `Book` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_shelfId_fkey";

-- AlterTable
ALTER TABLE "Book" ALTER COLUMN "shelfId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_shelfId_fkey" FOREIGN KEY ("shelfId") REFERENCES "Shelf"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
