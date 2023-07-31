import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import images from '../../assets';

const Blockchain = () => {
  const courses = [
    {
      id: 3,
      name: 'Introduction to Blockchain',
      description:
        'Blockchain is a type of distributed ledger technology that allows data to be stored globally on thousands of servers. It allows multiple parties to transact securely and reliably without a central authority. This course provides a deep understanding of the core principles of blockchain technology and its potential impact across various industries.',
      imgSrc: images.BlockChain, // You need to add a Blockchain image in your assets
      structure: [
        {
          id: 1,
          title: 'What is Blockchain?',
          link: '/quiz/block-quiz', // Assuming you will create a quiz page for Blockchain
        },
      ],
      features: [
        {
          id: 1,
          description:
            'Blockchain technology provides a decentralized and secure environment for transactions.',
        },
        {
          id: 2,
          description:
            'Every transaction is transparent and can be tracked, providing an environment that is resistant to fraud and hacking.',
        },
        {
          id: 3,
          description:
            'Blockchains can be both public (permissionless) and private (permissioned), catering to different use-cases.',
        },
        {
          id: 4,
          description:
            'Blockchain technology underpins cryptocurrencies like Bitcoin and Ethereum, but also has vast potential for use in fields such as supply chain, healthcare, finance, and more.',
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

export default Blockchain;
