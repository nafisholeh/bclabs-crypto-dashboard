const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.cryptocurrency.createMany({
    data: [
      {
        assetName: 'Bitcoin',
        symbol: 'btc',
        lastTradePrice: 63000,
        priceChangePercentage: -2.21,
        priceChangeUsd: -1426.18,
      },
      {
        assetName: 'Ethereum',
        symbol: 'eth',
        lastTradePrice: 3408.9,
        priceChangePercentage: -0.33,
        priceChangeUsd: -11.2,
      },
      {
        assetName: 'Dogecoin',
        symbol: 'doge',
        lastTradePrice: 0.15,
        priceChangePercentage: 15.75,
        priceChangeUsd: 0.02,
      },
      { assetName: 'Algorand', symbol: 'algo', lastTradePrice: 0.15, priceChangePercentage: 0.0, priceChangeUsd: 0.0 },
      { assetName: 'Polkadot', symbol: 'dot', lastTradePrice: 5.64, priceChangePercentage: 0.0, priceChangeUsd: 0.0 },
      { assetName: 'Uniswap', symbol: 'uni', lastTradePrice: 9.79, priceChangePercentage: 0.0, priceChangeUsd: 0.0 },
      {
        assetName: 'Compound',
        symbol: 'comp',
        lastTradePrice: 45.67,
        priceChangePercentage: -0.95,
        priceChangeUsd: -0.44,
      },
    ],
  });
}

main()
  .then(() => {
    console.log('Database seeded');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
