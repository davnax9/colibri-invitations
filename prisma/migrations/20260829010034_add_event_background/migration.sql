-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "backgroundEnabled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "backgroundOpacity" DOUBLE PRECISION NOT NULL DEFAULT 0.15,
ADD COLUMN     "backgroundPosition" TEXT NOT NULL DEFAULT 'center',
ADD COLUMN     "backgroundTexture" TEXT;
