'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Toaster } from 'react-hot-toast';
import SOLMints from '../sol-mints';
import images from '../../assets';

type Quiz = {
  id: number;
  name: string;
  questions: Question[];
};

type Question = {
  id: number;
  text: string;
  answers: Answer[];
};

type Answer = {
  id: number;
  text: string;
  isCorrect: boolean;
};

const encodeSolanaHackathonFeedback: Quiz = {
  id: 5,
  name: 'Encode x Solana Hackathon Feedback',
  questions: [
    {
      id: 1,
      text: 'How did you find the overall organization of the Encode x Solana Hackathon?',
      answers: [
        { id: 1, text: 'Excellent', isCorrect: false },
        { id: 2, text: 'Good', isCorrect: false },
        { id: 3, text: 'Fair', isCorrect: false },
        { id: 4, text: 'Poor', isCorrect: false },
      ],
    },
    {
      id: 2,
      text: 'Was the hackathon content relevant and useful for your learning and development?',
      answers: [
        { id: 1, text: 'Yes, very much so', isCorrect: false },
        { id: 2, text: 'Somewhat', isCorrect: false },
        { id: 3, text: 'No, not at all', isCorrect: false },
        { id: 4, text: "I don't know", isCorrect: false },
      ],
    },
    {
      id: 3,
      text: 'Would you participate in future events organized by Encode and Solana?',
      answers: [
        { id: 1, text: 'Definitely', isCorrect: false },
        { id: 2, text: 'Maybe', isCorrect: false },
        { id: 3, text: 'Unlikely', isCorrect: false },
        { id: 4, text: 'Never', isCorrect: false },
      ],
    },
    {
      id: 4,
      text: 'How would you rate the level of challenge provided by the hackathon tasks?',
      answers: [
        { id: 1, text: 'Too easy', isCorrect: false },
        { id: 2, text: 'Just right', isCorrect: false },
        { id: 3, text: 'Challenging', isCorrect: false },
        { id: 4, text: 'Too difficult', isCorrect: false },
      ],
    },
  ],
};

// const Quiz = () => {
const Enco = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);

  const questions = encodeSolanaHackathonFeedback.questions;

  const handleAnswerClick = (answer: Answer) => {
    setSelectedAnswer(answer);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsSuccess(true);
    }
  };

  function QuizQuestions() {
    return (
      <>
        <div className="quiz-quen-wrapper">
          <h2 className="quen-header">{questions[currentQuestion].text}</h2>
          <div className="quen-options-wrapper">
            {questions[currentQuestion].answers.map((answer) => (
              <button
                key={answer.id}
                onClick={() => handleAnswerClick(answer)}
                className="quen-options"
              >
                {answer.text}
              </button>
            ))}
          </div>
        </div>
        {/* <div className="quen-footer">
          {selectedAnswer && selectedAnswer.isCorrect && (
            <button className="button-layout">Next Question</button>
          )}
        </div> */}
      </>
    );
  }

  return (
    <div className="quiz-detail-wrapper">
      <div className="quiz-back-wrapper">
        <Link href="/course/encode">
          <p>&#x2190; Enco</p>
        </Link>
      </div>
      <div className="quiz-content-wrapper">
        <p className="title-layot">{isSuccess ? 'CLAIM BADGE' : 'FEEDBACK'}</p>
        {isSuccess ? (
          <SOLMints
            cmId_course="Bdx4NmQbXJu898hYPa5RKCBUdSKGMBobjw6GaLsns7vR"
            image_name={images.Encode}
          />
        ) : (
          <QuizQuestions />
        )}

        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
    </div>
  );
  //   );
};

export default Enco;
