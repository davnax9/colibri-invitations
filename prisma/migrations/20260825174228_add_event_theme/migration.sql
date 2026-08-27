-- CreateTable
CREATE TABLE "EventTheme" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "preset" TEXT NOT NULL DEFAULT 'ELEGANT',
    "primaryColor" TEXT NOT NULL DEFAULT '#292524',
    "secondaryColor" TEXT NOT NULL DEFAULT '#78716c',
    "accentColor" TEXT NOT NULL DEFAULT '#a8a29e',
    "backgroundColor" TEXT NOT NULL DEFAULT '#fafaf9',
    "surfaceColor" TEXT NOT NULL DEFAULT '#ffffff',
    "textColor" TEXT NOT NULL DEFAULT '#292524',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EventTheme_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EventTheme_eventId_key" ON "EventTheme"("eventId");

-- AddForeignKey
ALTER TABLE "EventTheme" ADD CONSTRAINT "EventTheme_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;
