import Image from 'next/image';
import { formatToDollar } from '@/utils/currency';
import TradeButton from './TradeButton';

interface AssetRowProps {
  asset: {
    assetName: string;
    symbol: string;
    lastTradePrice: number;
    priceChangePercentage: number;
    priceChangeUsd: number;
  };
  key: number;
}

const getPriceClass = (price: number) => {
  return price > 0 ? 'text-positive' : price < 0 ? 'text-negative' : 'text-neutral';
};

export default function AssetRow({ asset, key }: AssetRowProps) {
  return (
    <tr key={key} className="h-[80px] text-2xl font-medium">
      <td>
        <div className="flex items-center">
          <Image src={`/asset-${asset.symbol}.png`} width={64} height={64} alt="bitcoin" />
          <span className="text-primary ml-3 uppercase">{asset.symbol}/</span>
          <span className="text-secondary">USD</span>
        </div>
      </td>
      <td className="text-primary">{formatToDollar(asset.lastTradePrice)}</td>
      <td className={`${getPriceClass(asset.priceChangePercentage)}`}>{asset.priceChangePercentage}%</td>
      <td className={`${getPriceClass(asset.priceChangeUsd)}`}>{formatToDollar(asset.priceChangeUsd)}</td>
      <td>
        <div className="flex justify-end">
          <TradeButton />
        </div>
      </td>
    </tr>
  );
}
