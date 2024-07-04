import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const assetName = searchParams.get('assetName');
  const symbol = searchParams.get('symbol');
  const lastTradePrice = parseFloat(searchParams.get('lastTradePrice') ?? '0');
  const priceChangePercentage = parseFloat(searchParams.get('priceChangePercentage') ?? '0');
  const priceChangeUsd = parseFloat(searchParams.get('priceChangeUsd') ?? '0');

  try {
    if (!assetName || !symbol || isNaN(lastTradePrice) || isNaN(priceChangePercentage) || isNaN(priceChangeUsd)) {
      throw new Error('All cryptocurrency details are required');
    }

    await sql`
      INSERT INTO Cryptocurrency (
        assetName, symbol, lastTradePrice, priceChangePercentage, priceChangeUsd
      ) VALUES (
        ${assetName}, ${symbol}, ${lastTradePrice}, ${priceChangePercentage}, ${priceChangeUsd}
      );
    `;
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }

  const cryptocurrencies = await sql`SELECT * FROM Cryptocurrency;`;
  return NextResponse.json({ cryptocurrencies }, { status: 200 });
}
