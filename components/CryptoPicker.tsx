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
    <button onClick={dummyClick} className="flex justify-between items-center min-w-[122px] bg-black py-2 px-3">
      <Image src={currencyIcon} alt="BTC" width={32} height={32} />
      <div className="flex flex-row items-center min-w-[58px] text-lg text-currency">
        ${currency}
        <Image src="/right-arrow.png" alt="right-arrow" width={6} height={10} className="ml-2"></Image>
      </div>
    </button>
  );
}
