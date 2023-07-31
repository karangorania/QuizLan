'use client';

import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useEffect, useMemo, useState } from 'react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { WalletProvider, useWallet } from '@solana/wallet-adapter-react';
import {
  LedgerWalletAdapter,
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import '@solana/wallet-adapter-react-ui/styles.css';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { walletAdapterIdentity } from '@metaplex-foundation/umi-signer-wallet-adapters';
import { setComputeUnitLimit } from '@metaplex-foundation/mpl-toolbox';
import {
  mplCandyMachine,
  fetchCandyMachine,
  mintV2,
  safeFetchCandyGuard,
  DefaultGuardSetMintArgs,
  DefaultGuardSet,
  SolPayment,
  CandyMachine,
  CandyGuard,
} from '@metaplex-foundation/mpl-candy-machine';
import {
  mplTokenMetadata,
  fetchDigitalAsset,
  TokenStandard,
} from '@metaplex-foundation/mpl-token-metadata';
import {
  base58PublicKey,
  generateSigner,
  Option,
  PublicKey,
  publicKey,
  SolAmount,
  some,
  transactionBuilder,
  Umi,
  unwrapSome,
} from '@metaplex-foundation/umi';
import images from '../assets';
import toast from 'react-hot-toast';

const SOLMints = ({ cmId_course, image_name }) => {
  let key: typeof PublicKey;

  const network =
    process.env.NEXT_PUBLIC_NETWORK === 'devnet'
      ? WalletAdapterNetwork.Devnet
      : process.env.NEXT_PUBLIC_NETWORK === 'testnet'
      ? WalletAdapterNetwork.Testnet
      : WalletAdapterNetwork.Mainnet;

  const endpoint = 'https://api.devnet.solana.com';

  const wallets = useMemo(
    () => [new LedgerWalletAdapter(), new SolflareWalletAdapter({ network })],
    [network]
  );

  const WalletMultiButtonDynamic = dynamic(
    async () =>
      (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
    { ssr: false }
  );

  // set up umi
  //   let umi: Umi = createUmi(endpoint)
  let umi = createUmi(endpoint).use(mplTokenMetadata()).use(mplCandyMachine());

  // state
  const [loading, setLoading] = useState(false);
  //   const [mintCreated, setMintCreated] = useState<PublicKey | null>(null);
  const [mintCreated, setMintCreated] = useState<null>(null);
  const [mintMsg, setMintMsg] = useState<string>();
  const [costInSol, setCostInSol] = useState<number>(0);
  const [cmv3v2, setCandyMachine] = useState<CandyMachine>();
  const [defaultCandyGuardSet, setDefaultCandyGuardSet] =
    useState<CandyGuard<DefaultGuardSet>>();
  const [countTotal, setCountTotal] = useState<number>();
  const [countRemaining, setCountRemaining] = useState<number>();
  const [countMinted, setCountMinted] = useState<number>();
  const [mintDisabled, setMintDisabled] = useState<boolean>(true);

  // retrieve item counts to determine availability and
  // from the solPayment, display cost on the Mint button
  const retrieveAvailability = async () => {
    // const cmId = '2e9PF9mHXo63kYKHcyCp7ny7rxjhfFBP3j5V7oN8YjDQ';
    const cmId = cmId_course;

    if (!cmId) {
      setMintMsg('No candy machine ID found. Add environment variable.');
      return;
    }
    const candyMachine: CandyMachine = await fetchCandyMachine(
      umi,
      publicKey(cmId)
    );
    setCandyMachine(candyMachine);

    // Get counts
    setCountTotal(candyMachine.itemsLoaded);
    setCountMinted(Number(candyMachine.itemsRedeemed));
    const remaining =
      candyMachine.itemsLoaded - Number(candyMachine.itemsRedeemed);
    setCountRemaining(remaining);

    // Get cost
    const candyGuard = await safeFetchCandyGuard(
      umi,
      candyMachine.mintAuthority
    );
    if (candyGuard) {
      setDefaultCandyGuardSet(candyGuard);
    }
    const defaultGuards: DefaultGuardSet | undefined = candyGuard?.guards;
    const solPaymentGuard: undefined =
      // const solPaymentGuard: Option<SolPayment> | undefined =
      defaultGuards?.solPayment;

    if (solPaymentGuard) {
      const solPayment: SolPayment | null = unwrapSome(solPaymentGuard);
      if (solPayment) {
        // const lamports: SolAmount = solPayment.lamports;
        const lamports = solPayment.lamports;
        const solCost = Number(lamports.basisPoints) / 1000000000;
        setCostInSol(solCost);
      }
    }

    if (remaining > 0) {
      setMintDisabled(false);
    }
  };

  useEffect(() => {
    retrieveAvailability();
  }, [mintCreated]);

  // Inner Mint component to handle showing the Mint button,
  // and mint messages
  const Mint = () => {
    const wallet = useWallet();
    umi = umi.use(walletAdapterIdentity(wallet));

    // check wallet balance
    const checkWalletBalance = async () => {
      //   const balance: SolAmount = await umi.rpc.getBalance(
      const balance = await umi.rpc.getBalance(umi.identity.publicKey);
      if (Number(balance.basisPoints) / 1000000000 < costInSol) {
        // setMintMsg('Add more SOL to your wallet.');
        // setMintDisabled(true);
      } else {
        if (countRemaining !== undefined && countRemaining > 0) {
          setMintDisabled(false);
        }
      }
    };

    if (!wallet.connected) {
      return <p>Please connect your wallet.</p>;
    }

    checkWalletBalance();

    const mintBtnHandler = async () => {
      if (!cmv3v2 || !defaultCandyGuardSet) {
        setMintMsg(
          'There was an error fetching the candy machine. Try refreshing your browser window.'
        );
        return;
      }
      setLoading(true);
      setMintMsg(undefined);

      try {
        const candyMachine = cmv3v2;
        const candyGuard = defaultCandyGuardSet;

        const nftSigner = generateSigner(umi);

        const mintArgs: Partial<DefaultGuardSetMintArgs> = {};

        // solPayment has mintArgs
        const defaultGuards: DefaultGuardSet | undefined = candyGuard?.guards;
        const solPaymentGuard: undefined =
          // const solPaymentGuard: Option<SolPayment> | undefined =
          defaultGuards?.solPayment;
        if (solPaymentGuard) {
          const solPayment: SolPayment | null = unwrapSome(solPaymentGuard);
          if (solPayment) {
            const treasury = solPayment.destination;

            mintArgs.solPayment = some({
              destination: treasury,
            });
          }
        }

        const tx = transactionBuilder()
          .add(setComputeUnitLimit(umi, { units: 600_000 }))
          .add(
            mintV2(umi, {
              candyMachine: candyMachine.publicKey,
              collectionMint: candyMachine.collectionMint,
              collectionUpdateAuthority: candyMachine.authority,
              nftMint: nftSigner,
              candyGuard: candyGuard?.publicKey,
              mintArgs: mintArgs,

              tokenStandard: TokenStandard.ProgrammableNonFungible,
            })
          );

        const { signature } = await tx.sendAndConfirm(umi, {
          confirm: { commitment: 'finalized' },
          send: {
            skipPreflight: true,
          },
        });

        setMintCreated(nftSigner.publicKey);
        // setMintMsg('Mint was successful!');
        toast.success('Mint was successful!');
      } catch (err: any) {
        console.error(err);
        setMintMsg(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (mintCreated) {
      return (
        <div>
          <a
            className="text-lg mt-[30px] font-semibold px-6"
            target="_blank"
            rel="noreferrer"
            href={`https://solscan.io/token/${base58PublicKey(mintCreated)}${
              network === 'devnet' ? '?cluster=devnet' : ''
            }`}
          >
            <p>View on Solscan</p>
          </a>
        </div>
      );
    }
    return (
      <>
        <button
          onClick={mintBtnHandler}
          className="w-72 text-lg mt-[30px] font-semibold px-6 button-layout"
          disabled={mintDisabled || loading}
        >
          MINT
          {/* <br />({costInSol} SOL) */}
        </button>
        {loading && <div className="">. . .</div>}
      </>
    );
  };

  return (
    <main
      className="mint-content-wrapper"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="mint-on-going-wrapper" style={{ textAlign: 'center' }}>
        <Image
          className="mint-img-wrapper"
          src={image_name}
          alt="Preview of NFTs"
          width={200}
          height={200}
          priority
        />
        <p>
          Minted: {countMinted} / {countTotal}
        </p>
        <p>Remaining: {countRemaining}</p>
        <Mint />
      </div>

      {mintMsg && (
        <div className="mint-success-wrapper" style={{ textAlign: 'center' }}>
          {/* <span>{mintMsg}</span> */}
        </div>
      )}
    </main>
  );
};

export default SOLMints;
