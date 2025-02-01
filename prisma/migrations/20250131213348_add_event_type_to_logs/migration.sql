/*
  Warnings:

  - Added the required column `eventType` to the `SystemLog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SystemLog" ADD COLUMN     "eventType" TEXT NOT NULL;
