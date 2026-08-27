/*
  Warnings:

  - The `plan` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "UserPlan" AS ENUM ('BASIC', 'PRO');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "plan",
ADD COLUMN     "plan" "UserPlan" NOT NULL DEFAULT 'BASIC';

-- DropEnum
DROP TYPE "SubscriptionPlan";
