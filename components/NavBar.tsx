'use client';

import { useState } from 'react';
import Image from 'next/image';
import ActionButton from './ActionButton';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full text-white px-5">
      <div className="flex justify-between items-center xl:max-w-[1180px] mx-auto py-5 xl:py-4 px-6 xl:px-0">
        <div className="flex items-center">
          <Image src="/web-logo.png" alt="Logo" width={193} height={25} />
        </div>
        <div className="hidden xl:flex space-x-12 text-xl font-medium">
          <span>Exchange</span>
          <span>Last Transactions</span>
          <span>Invite Friend</span>
          <span>Notifications</span>
        </div>
        <div className="hidden xl:flex justify-center space-x-4">
          <ActionButton text="LOG IN" size="small" variant="outlined" />
          <ActionButton text="SIGN UP" size="small" />
        </div>
        <div className="xl:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="xl:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-4 z-50">
          <button onClick={toggleMenu} className="absolute top-4 right-4 focus:outline-none">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <span>Exchange</span>
          <span>Last Transactions</span>
          <span>Invite Friend</span>
          <span>Notifications</span>
          <div className="h-[20px]"></div>
          <div className="flex flex-row">
            <ActionButton text="LOG IN" size="small" variant="outlined" />
            <div className="w-[20px]" />
            <ActionButton text="SIGN UP" size="small" />
          </div>
        </div>
      )}
    </nav>
  );
}
