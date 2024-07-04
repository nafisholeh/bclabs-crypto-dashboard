import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import CryptoPicker from './CryptoPicker';

interface SwapInputProps {
  position: 'left' | 'right';
  currency?: string;
  balance?: string;
  valueUsd?: number;
  valueCurrency?: number;
  currencyIcon: string | StaticImport;
}

export default function SwapInput({
  position = 'left',
  currency = 'BTC',
  currencyIcon,
  balance = '0,00',
  valueUsd = 0,
  valueCurrency = 0,
}: SwapInputProps) {
  return (
    <div
      className={`flex flex-1 justify-between py-5 px-6 md:px-12 bg-placeholder ${position === 'left' ? 'rounded-t-lg md:rounded-tr-none md:rounded-l-lg' : 'rounded-b-lg md:rounded-bl-none md:rounded-r-lg md:ml-1 mt-1 md:mt-0'}`}>
      <div className="flex flex-col font-medium">
        <span className="text-3xl sm:text-7xl mt-2 xs:mt-0 text-primary xs:leading-loose">
          {valueCurrency.toFixed(2)}
        </span>
        <span className="text-xl text-secondary">${valueUsd.toFixed(2)}</span>
      </div>
      <div className="mt-2 sm:mt-0">
        <CryptoPicker currency={currency} currencyIcon={currencyIcon} />
        <div className="text-primary text-xs sm:text-xl mt-2">
          Balance: <span className="text-accent">{balance}</span>
        </div>
      </div>
    </div>
  );
}
