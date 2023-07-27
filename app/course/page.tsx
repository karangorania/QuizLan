import React from 'react';
import images from '../assets';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="course-detail-wrapper">
      <div className="course-header">
        <div>
          <h2>Arbitrum Blockchain</h2>
          <h5>
            Learn how to transact on chains beyond Ethereum mainnet in this
            Quest.The ultimate toolkit for building private applications is
            finally here.
          </h5>
        </div>
        <Image
          className="course-selected-img"
          src={images.arbitrum}
          alt="ArbitrumLogo"
          // onClick={() => navigate('/course')}
        />
        {/* <img src={ArbitrumLogo} alt='ArbitrumLogo' className='course-selected-img' /> */}
      </div>
      <p className="course-content-title">Course structure</p>
      <Link href="/quiz">
        <div className="course-content-dynamic">WHAT IS ALEO</div>
      </Link>
    </div>
  );
};

export default Page;
