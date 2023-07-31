import React from "react";
import Image from "next/image";
import Link from "next/link";
import images from "../../assets";

const Page = () => {
  const courses = [
    {
      id: 1,
      name: "Solana Blockchain",
      description:
        "Solana is a high-performance, permissionless blockchain, and is known for its scalability. It is designed to support all types of decentralized apps and crypto-currencies with secure, scalable, low-cost, and composable solutions.",
      imgSrc: images.Solana,
      structure: [
        {
          id: 1,
          title: "What is Solana ?",
          link: "/quiz/sol-quiz",
        },
      ],
      features: [
        {
          id: 1,
          description:
            "Solana uses a unique timestamp system called Proof of History (PoH).",
        },
        {
          id: 2,
          description:
            "The consensus algorithm it employs is called Proof of Stake (PoS).",
        },
        {
          id: 3,
          description:
            "It allows for high throughput and scalability due to its unique architecture.",
        },
        {
          id: 4,
          description:
            "The primary programming languages for Solana smart contracts are Rust and C.",
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

export default Page;
