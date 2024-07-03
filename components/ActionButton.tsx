'use client';

interface ActionButtonProps {
  size?: 'small' | 'medium';
  variant?: 'outlined' | 'fill';
  text: string;
}

export default function ActionButton({ size = 'medium', variant = 'fill', text }: ActionButtonProps) {
  const dummyClick = () => {};

  return (
    <button
      onClick={dummyClick}
      className={`flex justify-center font-medium text-white ${size === 'medium' ? 'min-w-[250px] py-4' : 'min-w-[74px] p-2'} ${variant === 'fill' ? 'bg-button-primary' : 'border border-button'} rounded-tl-lg rounded-br-lg`}>
      {text}
    </button>
  );
}
