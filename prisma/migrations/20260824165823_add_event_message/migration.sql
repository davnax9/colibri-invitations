-- CreateTable
CREATE TABLE "EventMessage" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EventMessage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EventMessage_eventId_key" ON "EventMessage"("eventId");

-- AddForeignKey
ALTER TABLE "EventMessage" ADD CONSTRAINT "EventMessage_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;
