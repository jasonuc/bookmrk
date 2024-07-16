/*
  Warnings:

  - You are about to drop the column `progress` on the `Book` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('READING', 'TBR', 'DNF', 'FINISHED');

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "progress",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'READING';

-- DropEnum
DROP TYPE "Progress";
