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
      {/* <hero> */}
      <div className="mian flex justify-around items-center h-[90vh] mx-16">
        {/* <div className=""> */}
        <div className="absolute h-[500px] w-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-purple-700 to-slate-900 blur-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[.50] z-[-1]" />
        {/* <Image
            className="animate-[float_3s_ease-in-out_infinite]"
            src={images.nftMain}
            width={400}
            alt="SolanaLogo"
          /> */}
        {/* </div> */}
        <div className="tagline text-center">
          <p className=" md:w-[550px] text-4xl font-extrabold">
            Discover the joy of learning while having fun! Take our quizzes and
            unlock the realms of knowledge.
          </p>
        </div>
      </div>
      {/* </hero> */}
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
