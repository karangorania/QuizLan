import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import images from '../../assets';

const Nas = () => {
  const courses = [
    {
      id: 5,
      name: 'Encode x Solana Hackathon',
      description:
        'The Encode x Solana Hackathon is a collaborative event for developers to build innovative projects using the Solana blockchain. It provides a hands-on learning experience for blockchain technology, smart contracts, and decentralized application development.',
      imgSrc: images.Encode, // You need to add Encode x Solana image in your assets
      structure: [
        {
          id: 1,
          title: 'Encode x Solana Hackathon Feedback',
          link: '/quiz/enco-quiz', // Link to the Feedback Form for Encode x Solana Hackathon
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
          {/* <p className="course-content-title">Key Features</p> */}
          {/* {course.features.map((feature, index) => (
            <p className="key-content" key={index}>
              {feature.description}
            </p>
          ))} */}
          <p className="course-content-title">Feedback</p>
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

export default Nas;
