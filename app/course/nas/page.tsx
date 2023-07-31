import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import images from '../../assets';

const Nas = () => {
  const courses = [
    {
      id: 4,
      name: 'Cohort Nas X Solana Session',
      description:
        'The Nas X Solana Session is an engaging and informative course where students can learn about the Solana blockchain, discuss ideas, and collaborate on projects. It provides an immersive learning experience about blockchain technology, smart contracts, and DApps development.',
      imgSrc: images.NAS, // You need to add Nas X Solana image in your assets
      structure: [
        {
          id: 1,
          title: 'Nas X Solana Session Feedback',
          link: '/quiz/nas-quiz', // Assuming you will create a feedback page for Nas X Solana session
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
