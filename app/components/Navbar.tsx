'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';

const Navbar = () => {
  return (
    <div className="bg-transparent bg-black bg-opacity-50 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {/* <Image src="your-logo-url" alt="Logo" className="h-10 w-10 mr-2" /> */}
          {/* <Link href="#" className="text-white font-bold text-lg mr-6">
            QuizLan
          </Link> */}
          <Link
            href="#"
            className="text-white font-bold text-lg mr-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 box-decoration-clone"
          >
            QuizLan
          </Link>

          <nav className="text-white">
            <Link href="#" className="mx-2">
              Home
            </Link>
            <Link href="#" className="mx-2">
              Mint
            </Link>
            <Link href="#" className="mx-2">
              Create
            </Link>
            <Link href="#" className="mx-2">
              Contact
            </Link>
          </nav>
        </div>
        <div>
          {/* <button className="text-white bg-gray-900 px-6 py-2 rounded font-medium"> */}
          {/* Connect Wallet */}
          <WalletMultiButton />
          {/* </button> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
