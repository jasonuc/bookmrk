/*
  Warnings:

  - You are about to drop the `BookShelf` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BookShelf" DROP CONSTRAINT "BookShelf_bookId_fkey";

-- DropForeignKey
ALTER TABLE "BookShelf" DROP CONSTRAINT "BookShelf_shelfId_fkey";

-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "shelfId" TEXT;

-- DropTable
DROP TABLE "BookShelf";

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_shelfId_fkey" FOREIGN KEY ("shelfId") REFERENCES "Shelf"("id") ON DELETE SET NULL ON UPDATE CASCADE;
