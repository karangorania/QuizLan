'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Quiz = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  function ClaimBadge() {
    return <div>Success</div>;
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
          <button onClick={() => setIsSuccess(true)}>Success</button>
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
        <p className="content-title">
          {isSuccess ? 'CLAIM BADGE' : 'SIMPLE QUIZ'}
        </p>
        {isSuccess ? <ClaimBadge /> : <QuizQuens />}
      </div>
    </div>
  );
};

export default Quiz;
