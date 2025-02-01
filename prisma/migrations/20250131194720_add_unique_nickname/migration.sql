/*
  Warnings:

  - You are about to drop the column `teamA` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `teamB` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the `Draft` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[nickname]` on the table `Player` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `teamAId` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamBId` to the `Match` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Draft" DROP CONSTRAINT "Draft_participantId_fkey";

-- DropForeignKey
ALTER TABLE "Draft" DROP CONSTRAINT "Draft_playerId_fkey";

-- AlterTable
ALTER TABLE "Match" DROP COLUMN "teamA",
DROP COLUMN "teamB",
ADD COLUMN     "teamAId" TEXT NOT NULL,
ADD COLUMN     "teamBId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Participant" ADD COLUMN     "photo" TEXT;

-- DropTable
DROP TABLE "Draft";

-- CreateTable
CREATE TABLE "DraftHistory" (
    "id" TEXT NOT NULL,
    "participantId" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DraftHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Player_nickname_key" ON "Player"("nickname");

-- AddForeignKey
ALTER TABLE "DraftHistory" ADD CONSTRAINT "DraftHistory_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "Participant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DraftHistory" ADD CONSTRAINT "DraftHistory_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_teamAId_fkey" FOREIGN KEY ("teamAId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_teamBId_fkey" FOREIGN KEY ("teamBId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
