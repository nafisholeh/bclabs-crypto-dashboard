import Image from 'next/image';
import { formatToDollar } from '@/utils/currency';

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
      <td className="text-primary">{asset.priceChangePercentage}%</td>
      <td className="text-primary">{formatToDollar(asset.priceChangeUsd)}</td>
      <td>
        <div className="flex justify-end">
          <button className="bg-button-secondary text-action p-[10px]">Trade</button>
        </div>
      </td>
    </tr>
  );
}
