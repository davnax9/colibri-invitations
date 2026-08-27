-- CreateEnum
CREATE TYPE "GuestStatus" AS ENUM ('PENDING', 'CONFIRMED', 'DECLINED');

-- CreateTable
CREATE TABLE "EventGuest" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT,
    "passes" INTEGER NOT NULL DEFAULT 1,
    "confirmed" INTEGER,
    "status" "GuestStatus" NOT NULL DEFAULT 'PENDING',
    "token" TEXT NOT NULL,
    "message" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EventGuest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EventGuest_token_key" ON "EventGuest"("token");

-- CreateIndex
CREATE INDEX "EventGuest_eventId_idx" ON "EventGuest"("eventId");

-- CreateIndex
CREATE INDEX "EventGuest_status_idx" ON "EventGuest"("status");

-- AddForeignKey
ALTER TABLE "EventGuest" ADD CONSTRAINT "EventGuest_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;
