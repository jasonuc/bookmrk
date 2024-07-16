-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'OWNER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role"[] DEFAULT ARRAY['USER']::"Role"[];
