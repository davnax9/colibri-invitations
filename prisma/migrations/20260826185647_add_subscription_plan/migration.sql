-- CreateEnum
CREATE TYPE "SubscriptionPlan" AS ENUM ('ESSENTIAL', 'CUSTOM');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "plan" "SubscriptionPlan" NOT NULL DEFAULT 'ESSENTIAL';
