# Crypto Exchange Platform

This is a [Next.js](https://nextjs.org/) project bootstrapped with [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The application allows users to view cryptocurrency prices, trade cryptocurrencies, and swap tokens.

## Features

- **Real-time Cryptocurrency Prices**: View the latest trade prices, 24-hour percentage change, and price changes in USD for various cryptocurrencies.
- **Swap Tokens**: Easily swap between different cryptocurrencies with real-time updates.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Secure Backend**: Uses PostgreSQL database with Prisma ORM for secure and efficient data management.

## Getting Started

First, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd <repository-name>
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [next/font](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project Structure

- `app/page.tsx`: Main page component displaying cryptocurrency prices and swap functionality.
- `components/AssetRow.tsx`: Component for displaying individual cryptocurrency data.
- `components/SwapInput.tsx`: Component for the swap token inputs.
- `components/ActionButton.tsx`: Reusable button component.
- `components/NavBar.tsx`: Navigation bar component.
- `prisma/schema.prisma`: Prisma schema defining the PostgreSQL database structure.

## Database Setup

Ensure you have PostgreSQL installed and running. Create a `.env` file in the root of your project with the following environment variables:

```env
POSTGRES_PRISMA_URL=your_postgres_prisma_url
POSTGRES_URL_NON_POOLING=your_postgres_non_pooling_url
```

Run the Prisma migrations to set up the database schema:

```bash
npx prisma migrate dev
```

## Learn More

To learn more about Next.js, Prisma, and PostgreSQL, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Prisma Documentation](https://www.prisma.io/docs/) - learn about Prisma features and API.
- [PostgreSQL Documentation](https://www.postgresql.org/docs/) - learn about PostgreSQL features and API.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Feel free to modify the repository URL and other project-specific details as necessary. This README provides a clear overview of the project, setup instructions, and additional resources for learning.