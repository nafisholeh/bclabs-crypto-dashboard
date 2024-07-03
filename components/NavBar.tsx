import Image from 'next/image';
import ActionButton from './ActionButton';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full">
      <div className="flex justify-between items-center max-w-[1180px] mx-auto py-4">
        <div className="flex items-center">
          <Image src="/web-logo.png" alt="Logo" width={193} height={25} />
        </div>
        <div className="flex space-x-4 text-xl font-medium text-white">
          <span>Exchange</span>
          <span>Last Transactions</span>
          <span>Invite Friend</span>
          <span>Notifications</span>
        </div>
        <div className="flex justify-center space-x-4">
          <ActionButton text="LOG IN" size="small" variant="outlined" />
          <ActionButton text="SIGN UP" size="small" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
