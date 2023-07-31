import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import images from '../../assets';

const Phantom = () => {
  const courses = [
    {
      id: 2,
      name: 'Phantom Wallet',
      description:
        'Phantom is a popular crypto wallet and browser extension designed for the Solana blockchain. It allows users to easily manage their digital assets, interact with decentralized applications (dApps), and perform secure transactions seamlessly.',
      imgSrc: images.Phantom, // You need to add Phantom image in your assets
      structure: [
        {
          id: 1,
          title: 'What is Phantom Wallet?',
          link: '/quiz/phan-quiz', // Assuming you will create a quiz page for Phantom Wallet
        },
      ],
      features: [
        {
          id: 1,
          description:
            'Phantom Wallet is a multi-functional wallet offering secure transaction capabilities, asset management, and dApp interaction.',
        },
        {
          id: 2,
          description:
            'It provides a user-friendly interface for seamless asset management and dApp usage.',
        },
        {
          id: 3,
          description:
            'Phantom supports all Solana SPL tokens and also provides support for NFTs.',
        },
        {
          id: 4,
          description:
            'Users can swap tokens directly within the Phantom wallet using the built-in decentralized exchange functionality.',
        },
      ],
    },
  ];

  return (
    <div className="course-detail-wrapper">
      {courses.map((course) => (
        <div key={course.id}>
          <div className="course-header">
            <div className="course-text">
              <h2>{course.name}</h2>
              <h5>{course.description}</h5>
            </div>
            <Image
              className="course-selected-img"
              src={course.imgSrc}
              alt={`${course.name} Logo`}
            />
          </div>
          <p className="course-content-title">Key Features</p>
          {course.features.map((feature, index) => (
            <p className="key-content" key={index}>
              {feature.description}
            </p>
          ))}
          <p className="course-content-title">Course structure</p>
          {course.structure.map((item) => (
            <Link key={item.id} href={item.link}>
              <div className="course-content-dynamic">{item.title}</div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Phantom;
