"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import images from "../assets";

const Quiz = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  function ClaimBadge() {
    return (
      <div className="quiz-success-wrapper">
        <div>
          <h2>New badge earned!</h2>
          <p>
            Claim your badge with your crypto wallet. This won’t cost anything.
          </p>
          <button></button>
        </div>
        <div>
          <Image src={images.arbitrum} alt="ArbitrumLogo" />
        </div>
      </div>
    );
  }

  function QuizQuens() {
    return (
      <>
        <div className="quiz-quen-wrapper">
          <h2 className="quen-header">ONE-WORD ASSOCIATION WITH ALEO</h2>
          <div className="quen-options-wrapper">
            <button className="quen-options">privacy</button>
            <button className="quen-options">transparency</button>
            <button className="quen-options">scalability</button>
          </div>
        </div>
        <div className="quen-footer">
          <button onClick={() => setIsSuccess(true)} className="button-layout">
            Success
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="quiz-detail-wrapper">
      <div className="quiz-back-wrapper">
        <Link href="/course">
          <p>&#x2190; Arbitrum</p>
        </Link>
      </div>
      <div className="quiz-content-wrapper">
        <p className="title-layot">
          {isSuccess ? "CLAIM BADGE" : "SIMPLE QUIZ"}
        </p>
        {isSuccess ? <ClaimBadge /> : <QuizQuens />}
      </div>
    </div>
  );
};

export default Quiz;
