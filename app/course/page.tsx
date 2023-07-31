import React from "react";
import Image from "next/image";
import Link from "next/link";
import images from "../assets";

const Page = () => {
  const courses = [
    {
      id: 1,
      name: "Solana Blockchain",
      description:
        "Learn how to transact on chains beyond Ethereum mainnet in this Quest.The ultimate toolkit for building private applications is finally here.",
      imgSrc: images.Solana,
      structure: [
        {
          id: 1,
          title: "WHAT IS ALEO",
          link: "/quiz",
        },
        // add more course structure items here as needed
      ],
    },
  ];

  return (
    // <div className="course-detail-wrapper">
    //   <div className="course-header">
    //     <div>
    //       <h2>Arbitrum Blockchain</h2>
    //       <h5>
    //         Learn how to transact on chains beyond Ethereum mainnet in this
    //         Quest.The ultimate toolkit for building private applications is
    //         finally here.
    //       </h5>
    //     </div>
    //     <Image
    //       className="course-selected-img"
    //       src={images.arbitrum}
    //       alt="ArbitrumLogo"
    //       // onClick={() => navigate('/course')}
    //     />
    //     {/* <img src={ArbitrumLogo} alt='ArbitrumLogo' className='course-selected-img' /> */}
    //   </div>
    //   <p className="course-content-title">Course structure</p>
    //   <Link href="/quiz">
    //     <div className="course-content-dynamic">WHAT IS Sol</div>
    //   </Link>
    // </div>

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
