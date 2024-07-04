'use client';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface CryptoPickerProps {
  currency?: string;
  currencyIcon: string | StaticImport;
}

export default function CryptoPicker({ currency = 'BTC', currencyIcon }: CryptoPickerProps) {
  const dummyClick = () => {};

  return (
    <button
      onClick={dummyClick}
      className="flex justify-between items-center min-w-[100px] sm:min-w-[122px] bg-black py-2 px-3">
      <Image
        src={currencyIcon}
        alt="BTC"
        width={32}
        height={32}
        className="w-[18px] sm:w-[32px] h-[18px] sm:h-[32px]"
      />
      <div className="flex flex-row items-center min-w-[34px] sm:min-w-[58px] text-md sm:text-lg text-currency">
        ${currency}
        <Image src="/right-arrow.png" alt="right-arrow" width={6} height={10} className="ml-1 sm:ml-2"></Image>
      </div>
    </button>
  );
}
