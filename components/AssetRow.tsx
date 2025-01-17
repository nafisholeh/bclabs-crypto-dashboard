import Image from 'next/image';
import { formatToDollar } from '@/utils/currency';
import TradeButton from './TradeButton';

export interface Asset {
  assetName: string;
  symbol: string;
  lasttradeprice: number;
  pricechangepercentage: number;
  pricechangeusd: number;
}
interface AssetRowProps {
  asset: Asset;
  key: number;
}

const getPriceClass = (price: number) => {
  return price > 0 ? 'text-positive' : price < 0 ? 'text-negative' : 'text-neutral';
};

export default function AssetRow({ asset, key }: AssetRowProps) {
  const lastTradePriceFormatted = formatToDollar(asset.lasttradeprice);
  const priceChangeUsdFormatted = formatToDollar(asset.pricechangeusd);
  return (
    <tr key={key} className="h-[80px] text-2xl font-medium">
      <td>
        <div className="flex items-center md:mt-0 mt-3 text-xl sm:text-2xl">
          <Image src={`/asset-${asset.symbol}.png`} width={64} height={64} alt="bitcoin" />
          <span className="text-primary ml-3 uppercase">{asset.symbol}/</span>
          <span className="text-secondary">USD</span>
        </div>
        <dl className="md:hidden text-xl my-3">
          <dt className="sm:hidden font-thin text-secondary">Last trade</dt>
          <dd className="sm:hidden font-medium">{lastTradePriceFormatted}%</dd>
          <div className="flex flex-row sm:flex-col justify-between">
            <div>
              <dt className="font-thin text-secondary mt-2">24H change</dt>
              <dd className={`${getPriceClass(asset.pricechangeusd)} font-medium`}>{priceChangeUsdFormatted}</dd>
            </div>
            <div>
              <dt className="font-thin text-secondary mt-2">24H %</dt>
              <dd className={`${getPriceClass(asset.pricechangepercentage)} font-medium`}>
                {asset.pricechangepercentage}%
              </dd>
            </div>
          </div>
          <dd className="visible sm:hidden mt-4 w-full">
            <TradeButton />
          </dd>
        </dl>
      </td>
      <td className="text-primary hidden sm:table-cell md:align-middle align-baseline">
        <div className="md:mt-0 mt-7">{lastTradePriceFormatted}</div>
      </td>
      <td className={`${getPriceClass(asset.pricechangepercentage)} hidden md:table-cell`}>
        {asset.pricechangepercentage}%
      </td>
      <td className={`${getPriceClass(asset.pricechangeusd)} hidden md:table-cell`}>{priceChangeUsdFormatted}</td>
      <td className="hidden sm:table-cell md:align-middle align-baseline">
        <div className="flex justify-end md:mt-0 mt-5">
          <TradeButton />
        </div>
      </td>
    </tr>
  );
}
