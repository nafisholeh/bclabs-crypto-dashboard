'use client';

export default function TradeButton() {
  const dummyClick = () => {};

  return (
    <button onClick={dummyClick} className="bg-button-secondary text-action p-[10px]">
      Trade
    </button>
  );
}
