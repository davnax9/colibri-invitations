-- CreateEnum
CREATE TYPE "GiftType" AS ENUM ('ENVELOPE', 'PHYSICAL_GIFT', 'GIFT_TABLE', 'BANK_TRANSFER', 'CUSTOM');

-- CreateTable
CREATE TABLE "EventGift" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "type" "GiftType" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "url" TEXT,
    "accountName" TEXT,
    "accountNumber" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EventGift_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "EventGift_eventId_idx" ON "EventGift"("eventId");

-- AddForeignKey
ALTER TABLE "EventGift" ADD CONSTRAINT "EventGift_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;
