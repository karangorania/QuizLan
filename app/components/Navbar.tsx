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
          <Link
            href="/"
            className="text-white font-bold text-lg mr-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 box-decoration-clone"
          >
            QuizLan
          </Link>
        </div>
        <nav className="text-white nav-center-layout">
          <Link href="#" className="mx-2">
            Create
          </Link>
          <Link href="/quiz/sol-quiz" className="mx-2">
            Mint
          </Link>
          {/* <Link href="/contact" className="mx-2">
            Contact
          </Link> */}
        </nav>
        <div>
          <WalletMultiButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
