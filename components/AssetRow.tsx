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
  const lastTradePriceFormatted = formatToDollar(asset.lastTradePrice);
  const priceChangeUsdFormatted = formatToDollar(asset.priceChangeUsd);
  return (
    <tr key={key} className="h-[80px] text-2xl font-medium">
      <td>
        <div className="flex items-center md:mt-0 mt-3 text-xl sm:text-2xl">
          <Image src={`/asset-${asset.symbol}.png`} width={64} height={64} alt="bitcoin" />
          <span className="text-primary ml-3 uppercase">{asset.symbol}/</span>
          <span className="text-secondary">USD</span>
        </div>
        <dl className="md:hidden text-xl my-3">
          <dt className="sm:hidden font-small text-secondary">Last trade</dt>
          <dd className="sm:hidden font-small">{lastTradePriceFormatted}%</dd>
          <dt className="font-small text-secondary mt-2">24H %</dt>
          <dd className="font-small">{asset.priceChangePercentage}%</dd>
          <dt className="font-small text-secondary mt-2">24H change</dt>
          <dd className="font-small">{priceChangeUsdFormatted}%</dd>
          <dd className="visible xs:hidden mt-4 w-full">
            <TradeButton />
          </dd>
        </dl>
      </td>
      <td className="text-primary hidden sm:table-cell md:align-middle align-baseline">
        <div className="md:mt-0 mt-7">{lastTradePriceFormatted}</div>
      </td>
      <td className={`${getPriceClass(asset.priceChangePercentage)} hidden md:table-cell`}>
        {asset.priceChangePercentage}%
      </td>
      <td className={`${getPriceClass(asset.priceChangeUsd)} hidden md:table-cell`}>{priceChangeUsdFormatted}</td>
      <td className="hidden xs:table-cell md:align-middle align-baseline">
        <div className="flex justify-end md:mt-0 mt-5">
          <TradeButton />
        </div>
      </td>
    </tr>
  );
}
