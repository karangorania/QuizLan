import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Wallet } from './provider';
import { Navbar } from '../app/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'QuizLan',
  description: 'Gamified Learning with NFTs and Tokens',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Wallet>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </Wallet>
    </html>
  );
}
