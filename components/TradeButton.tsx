'use client';

export default function TradeButton() {
  const dummyClick = () => {};

  return (
    <button
      onClick={dummyClick}
      className="bg-button-secondary text-xl sm:text-2xl text-action p-[10px] w-full xs:w-auto">
      Trade
    </button>
  );
}
