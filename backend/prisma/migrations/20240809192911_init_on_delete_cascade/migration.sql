-- DropForeignKey
ALTER TABLE "BookShelf" DROP CONSTRAINT "BookShelf_bookId_fkey";

-- DropForeignKey
ALTER TABLE "BookShelf" DROP CONSTRAINT "BookShelf_shelfId_fkey";

-- DropForeignKey
ALTER TABLE "Note" DROP CONSTRAINT "Note_bookId_fkey";

-- AddForeignKey
ALTER TABLE "BookShelf" ADD CONSTRAINT "BookShelf_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookShelf" ADD CONSTRAINT "BookShelf_shelfId_fkey" FOREIGN KEY ("shelfId") REFERENCES "Shelf"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;
