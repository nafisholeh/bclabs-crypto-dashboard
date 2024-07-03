import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative h-screen w-screen">
      <div className="relative flex flex-col items-center justify-center max-w-[777px] mx-auto">
        <h1 className="font-roboto lg:text-8xl text-6xl leading-tight tracking-tight text-white text-center">
          Easy send and Request Crypto.
        </h1>
        <p className="font-roboto mt-[30px] lg:text-xl text-lg text-white text-center max-w-[557px] mt-4">
          Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in between.
        </p>
      </div>

      {/* Crypto list */}
      <div className="relative max-w-[1180px] mx-auto mt-[50px] py-[1.9rem] px-[2.5rem] rounded-10px border border-primary bg-black-80 rounded-[10px]">
        <table className="min-w-full font-roboto text-primary">
          <thead>
            <tr className="h-[50px] font-medium lg:text-xl text-lg text-primary border-b border-secondary">
              <td>ASSETS</td>
              <td>LAST TRADE</td>
              <td>24H %</td>
              <td>24H CHANGE</td>
              <td className="text-accent text-right">MORE {'>'}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5} className="h-[8px]"></td>
            </tr>
            <tr className="h-[80px] text-2xl font-medium">
              <td>
                <div className="flex items-center">
                  <Image src="/btc.png" width={64} height={64} alt="bitcoin" />
                  <span className="text-primary ml-3">BTC/</span>
                  <span className="text-secondary">USD</span>
                </div>
              </td>
              <td className="text-primary">$63,000.00</td>
              <td className="text-negative">-2.21%</td>
              <td className="text-negative">-$1,426.18</td>
              <td>
                <div className="flex justify-end">
                  <button className="bg-button-secondary text-action p-[10px]">Trade</button>
                </div>
              </td>
            </tr>
            {/* Repeat for other rows */}
          </tbody>
        </table>
      </div>

      {/* Swap Tokens */}
      <div className="relative max-w-[1180px] mx-auto mt-[50px] p-[2.5rem] rounded-10px border border-primary bg-black-80 rounded-[10px]">

        <div className="flex justify-between items-center">
          <span className="font-medium lg:text-xl text-lg text-primary">SWAP TOKENS</span>
          <Image src="/settings-icon.png" alt="Settings" width={32} height={32} />
        </div>

        <div className="relative flex mt-12">

          <div className="flex flex-1 justify-between py-5 px-12 bg-placeholder rounded-l-lg">
            <div className="flex flex-col font-medium">
              <span className="text-7xl text-primary leading-loose">0.00</span>
              <span className="text-xl text-secondary">$0.00</span>
            </div>
            <div>
              <div className="flex justify-between items-center min-w-[122px] bg-black py-2 px-3">
                <Image src="/bitcoin-currency.png" alt="BTC" width={32} height={32} />
                <div className="flex flex-row items-center min-w-[58px] text-lg text-currency">
                  BTC
                  <Image src="/right-arrow.png" alt="right-arrow" width={6} height={10} className="ml-2"></Image>
                </div>
              </div>
              <div className="text-primary text-xl mt-2">
                Balance: <span className="text-accent">24,240</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center absolute inset-0">
            <Image src="/swap-icon.png" alt="Swap" width={50} height={50} />
          </div>

          <div className="flex flex-1 justify-between py-5 px-12 bg-placeholder rounded-r-lg ml-1">
            <div className="flex flex-col font-medium">
              <span className="text-7xl text-primary leading-loose">0.00</span>
              <span className="text-xl text-secondary">$0.00</span>
            </div>
            <div>
              <div className="flex justify-between items-center min-w-[122px] bg-black py-2 px-3">
                <Image src="/bnb-currency.png" alt="BTC" width={32} height={32} />
                <div className="flex flex-row items-center min-w-[58px] text-lg text-currency">
                  BNB
                  <Image src="/right-arrow.png" alt="right-arrow" width={6} height={10} className="ml-2"></Image>
                </div>
              </div>
              <div className="text-primary text-xl mt-2">
                Balance: <span className="text-accent">63,970</span>
              </div>
            </div>
          </div>

        </div>

        <div className="flex justify-center mt-7">
          <div className="flex justify-center font-medium text-white min-w-[250px] bg-button-primary rounded-tl-lg rounded-br-lg py-4">
            SWOP TOKENS
          </div>
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
