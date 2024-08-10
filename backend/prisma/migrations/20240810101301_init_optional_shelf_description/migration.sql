-- AlterTable
ALTER TABLE "Shelf" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "description" SET DEFAULT 'Another literary universe.';
