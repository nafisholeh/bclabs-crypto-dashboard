import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative h-screen w-screen">
      <div className="relative flex flex-col items-center justify-center max-w-[777px] mx-auto">
        <h1 className="font-roboto lg:text-7xl text-4xl leading-tight tracking-tight text-white text-center">
          Easy send and Request Crypto.
        </h1>
        <p className="font-roboto mt-[30px] lg:text-xl text-lg text-white text-center max-w-[557px] mt-4">
          Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in between.
        </p>
      </div>
      <div className="relative max-w-[777px] mx-auto mt-[50px] py-[1.9rem] px-[2.5rem] rounded-10px border border-primary bg-black-80 rounded-[10px]">
        <table className="min-w-full font-roboto text-primary">
          <thead>
            <tr className="h-[50px] font-medium lg:text-xl text-lg border-b border-secondary">
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
            <tr className="h-[80px] text-md font-medium">
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
    </main>
  );
}
