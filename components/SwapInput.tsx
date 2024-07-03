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
      className={`flex flex-1 justify-between py-5 px-12 bg-placeholder ${position === 'left' ? 'rounded-l-lg' : 'rounded-r-lg ml-1'}`}>
      <div className="flex flex-col font-medium">
        <span className="text-7xl text-primary leading-loose">{valueCurrency.toFixed(2)}</span>
        <span className="text-xl text-secondary">${valueUsd.toFixed(2)}</span>
      </div>
      <div>
        <CryptoPicker currency={currency} currencyIcon={currencyIcon} />
        <div className="text-primary text-xl mt-2">
          Balance: <span className="text-accent">{balance}</span>
        </div>
      </div>
    </div>
  );
}
