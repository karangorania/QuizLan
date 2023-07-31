'use client';
import Image from 'next/image';
import Link from 'next/link';
import images from './assets';

export default function Home() {
  const courses = [
    {
      id: 'phantom',
      name: 'Phantom Blockchain',
      description: 'Some description about Phantom Blockchain',
      imgSrc: images.Phantom,
      structure: [
        {
          id: 1,
          title: 'WHAT IS PHANTOM',
          link: '/quiz',
        },
        // add more course structure items here as needed
      ],
    },
    // add more courses here as needed
  ];

  return (
    <div className="home-wrapper">
      <div className="home-content">
        <h2>Punny headline</h2>
        <p>
          And an even wittier subheading to boot. Jump start your marketing
          efforts with this example based on Apple marketing pages.
        </p>
      </div>
      <div className="home-sub-content">
        <h2 className="title">Categories</h2>
        <div className="wrapper">
          <div className="sub-card-wrapper">
            <div className="card-sol-wrapper">
              <Link href="/course/solana">
                <Image src={images.Solana} alt="SolanaLogo" />
              </Link>
            </div>
            <p>Solana</p>
          </div>
          <div className="sub-card-wrapper">
            <div className="card-nas-wrapper">
              <Link href="/course/nas">
                <Image src={images.NAS} alt="NasAcademyLogo" />
              </Link>
            </div>
            <p>Nas Academy X Solana</p>
          </div>
          <div className="sub-card-wrapper">
            <div className="card-ec-wrapper">
              <Link href="/course/encode">
                <Image src={images.Encode} alt="EncodeLogo" />
              </Link>
            </div>
            <p>Encode X Solana</p>
          </div>
          <div className="sub-card-wrapper">
            <div className="card-ph-wrapper">
              <Link href="/course/phantom">
                <Image src={images.Phantom} alt="PhantomLogo" />
              </Link>
            </div>
            <p>Phantom</p>
          </div>
          <div className="sub-card-wrapper">
            <div className="card-block-wrapper">
              <Link href="/course/blockchain">
                <Image src={images.BlockChain} alt="BlockchainLogo" />
              </Link>
            </div>
            <p>Blockchain</p>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <p id="poweredByText">
          Made Love By{' '}
          <span id="poweredByBottomText">
            <span id="quizlan">QuizLan</span>
          </span>
        </p>
        <p className="copyRightText">
          © Copyright 2023 Quiz | All rights reserved.
        </p>
      </div>
    </div>
  );
}
