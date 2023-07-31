'use client';
import Image from 'next/image';
import images from './assets';
import Link from 'next/link';

export default function Home() {
  const courses = [
    {
      id: 'arbitrum',
      name: 'Arbitrum Blockchain',
      description: 'Learn how to transact on chains beyond Ethereum mainnet...',
      imgSrc: images.arbitrum,
      structure: [
        {
          id: 1,
          title: 'WHAT IS Arbi',
          link: '/quiz',
        },
        // add more course structure items here as needed
      ],
    },
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
            <div className="card-arb-wrapper">
              <Link href="/course">
                <Image src={images.arbitrum} alt="ArbitrumLogo" />
              </Link>
            </div>
            <p>Arbitrum</p>
          </div>
          <div className="sub-card-wrapper">
            <div className="card-ph-wrapper">
              <Image src={images.Phantom} alt="PhantomLogo" />
            </div>
            <p>Phantom</p>
          </div>
          <div className="sub-card-wrapper">
            <div className="card-pol-wrapper">
              <Image src={images.Polygon} alt="PolygonLogo" />
            </div>
            <p>Polygon</p>
          </div>
          <div></div>
          <div className="sub-card-wrapper">
            <div className="card-av-wrapper">
              <Image src={images.avalanche} alt="AvalancheLogo" />
            </div>
            <p>Avalanche</p>
          </div>
          <div className="sub-card-wrapper">
            <div className="card-me-wrapper">
              <Image src={images.MagicEden} alt="MagicEdenLogo" />
            </div>
            <p>Magic Eden</p>
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
