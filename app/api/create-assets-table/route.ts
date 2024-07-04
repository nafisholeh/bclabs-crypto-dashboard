import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await sql`
        CREATE TABLE Cryptocurrency (
            id SERIAL PRIMARY KEY,
            assetName VARCHAR(255) NOT NULL,
            symbol VARCHAR(255) NOT NULL,
            lastTradePrice FLOAT NOT NULL,
            priceChangePercentage FLOAT NOT NULL,
            priceChangeUsd FLOAT NOT NULL
        );
      `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
