-- CreateTable
CREATE TABLE "Cryptocurrency" (
    "id" SERIAL NOT NULL,
    "assetName" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "lastTradePrice" DOUBLE PRECISION NOT NULL,
    "priceChangePercentage" DOUBLE PRECISION NOT NULL,
    "priceChangeUsd" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Cryptocurrency_pkey" PRIMARY KEY ("id")
);
