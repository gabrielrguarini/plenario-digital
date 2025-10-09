-- AlterTable
ALTER TABLE "user" ADD COLUMN     "rejectionReason" TEXT,
ADD COLUMN     "userStatus" "Status" NOT NULL DEFAULT 'PENDING';
