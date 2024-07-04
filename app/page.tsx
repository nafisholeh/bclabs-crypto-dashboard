import SwapInput from '@/components/SwapInput';
import Image from 'next/image';
import prisma from '../lib/prisma';
import AssetRow from '@/components/AssetRow';
import ActionButton from '@/components/ActionButton';
import BackgroundImage from '../public/background.png';
import NavBar from '@/components/NavBar';

export default async function Home() {
  const cryptoAssets = await prisma.cryptocurrency.findMany();

  return (
    <main className="overflow-y-auto h-screen w-screen">
      <Image
        alt="Background Image"
        src={BackgroundImage}
        width={4320}
        height={2517}
        sizes="100vw"
        className="w-full h-auto absolute -z-10"
        quality={100}
      />

      <NavBar />

      <div className="relative flex flex-col items-center justify-center max-w-[777px] pt-[66px] mx-auto">
        <h1 className="font-roboto lg:text-8xl text-6xl leading-tight tracking-tight text-white text-center">
          Easy send and Request Crypto.
        </h1>
        <p className="font-roboto mt-[30px] lg:text-2xl text-lg text-white text-center max-w-[557px] mt-4">
          Bring blockchain to the people. Solana supports experiences
          <br />
          for power users, new consumers, and everyone in between.
        </p>
      </div>

      {/* Crypto list */}
      <div className="relative max-w-[1180px] xl:mx-auto mx-5 mt-[50px] py-[1.9rem] px-[2.5rem] backdrop-blur-lg rounded-10px border border-primary bg-black-80 rounded-[10px]">
        <table className="min-w-full font-roboto text-primary">
          <thead>
            <tr className="h-[50px] font-medium lg:text-2xl text-lg text-primary border-b border-secondary">
              <td className="flex flex-row items-end xs:table-cell justify-between max-w-[256px]">
                ASSETS
                <div className="xs:hidden text-accent">MORE {'>'}</div>
              </td>
              <td className="max-w-[256px] hidden sm:table-cell">LAST TRADE</td>
              <td className="max-w-[256px] hidden md:table-cell">24H %</td>
              <td className="max-w-[126px] hidden md:table-cell">24H CHANGE</td>
              <td className="max-w-[126px] hidden xs:table-cell text-accent text-right">MORE {'>'}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5} className="h-[8px]"></td>
            </tr>
            {cryptoAssets.map((asset, index) => (
              <AssetRow asset={asset} key={index} />
            ))}

            {/* Repeat for other rows */}
          </tbody>
        </table>
      </div>

      {/* Swap Tokens */}
      <div className="relative max-w-[1180px] xl:mx-auto mx-5 mt-[50px] mb-[150px] p-[2.5rem] backdrop-blur-lg rounded-10px border border-primary bg-black-80 rounded-[10px]">
        <div className="flex justify-between items-center">
          <span className="font-medium lg:text-2xl text-lg text-primary">SWAP TOKENS</span>
          <Image src="/settings-icon.png" alt="Settings" width={32} height={32} />
        </div>

        <div className="relative flex mt-12">
          <SwapInput
            position="left"
            currency="BTC"
            currencyIcon="/bitcoin-currency.png"
            balance="24,240"
            valueUsd={0}
            valueCurrency={0}
          />

          <div className="flex items-center justify-center absolute inset-0">
            <Image src="/swap-icon.png" alt="Swap" width={50} height={50} />
          </div>

          <SwapInput
            position="right"
            currency="BNB"
            currencyIcon="/bnb-currency.png"
            balance="63,970"
            valueUsd={0}
            valueCurrency={0}
          />
        </div>

        <div className="flex justify-center mt-7">
          <ActionButton text="SWAP TOKENS" />
        </div>

        <div className="flex justify-between items-center mt-5">
          <div className="flex flex-col">
            <span className="text-xl text-primary">1 BTC = 32.4039 ETH</span>
            <span className="text-xl text-accent mt-1">Free exchage</span>
          </div>
          <span className="text-xl text-secondary">Updates in 4s</span>
        </div>
      </div>
    </main>
  );
}
