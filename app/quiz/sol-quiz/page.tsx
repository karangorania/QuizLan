'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { toast, Toaster } from 'react-hot-toast';
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

const solanaQuiz: Quiz = {
  id: 1,
  name: 'What is Solana?',
  questions: [
    {
      id: 1,
      text: 'What consensus algorithm does Solana use?',
      answers: [
        { id: 1, text: 'Proof of Work (PoW)', isCorrect: false },
        { id: 2, text: 'Proof of Stake (PoS)', isCorrect: true },
        { id: 3, text: 'Delegated Proof of Stake (DPoS)', isCorrect: false },
        { id: 4, text: 'Proof of Authority (PoA)', isCorrect: false },
      ],
    },
    {
      id: 2,
      text: 'What is the primary programming language for Solana smart contracts?',
      answers: [
        { id: 1, text: 'Solidity', isCorrect: false },
        { id: 2, text: 'Rust and C', isCorrect: true },
        { id: 3, text: 'Python', isCorrect: false },
        { id: 4, text: 'JavaScript', isCorrect: false },
      ],
    },
    {
      id: 3,
      text: 'What does Solana’s architecture allow for?',
      answers: [
        { id: 1, text: 'High throughput and scalability', isCorrect: true },
        { id: 2, text: 'Slow transaction speeds', isCorrect: false },
        { id: 3, text: 'Limited number of validators', isCorrect: false },
        { id: 4, text: 'Only supports private networks', isCorrect: false },
      ],
    },
    {
      id: 4,
      text: 'What unique technology does Solana utilize to create a historical record of transactions?',
      answers: [
        { id: 1, text: 'Proof of History (PoH)', isCorrect: true },
        { id: 2, text: 'Proof of Work (PoW)', isCorrect: false },
        { id: 3, text: 'Sharding', isCorrect: false },
        { id: 4, text: 'State Channels', isCorrect: false },
      ],
    },
  ],
};

const Quiz = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);

  const questions = solanaQuiz.questions;

  const handleAnswerClick = (answer: Answer) => {
    setSelectedAnswer(answer);
    if (answer.isCorrect) {
      if (currentQuestion === questions.length - 1) {
        setIsSuccess(true);
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    } else {
      toast('Wrong answer, please try again.', {
        icon: '❌',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
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
        <Link href="/course/solana">
          <p>&#x2190; Solana</p>
        </Link>
      </div>
      <div className="quiz-content-wrapper">
        <p className="title-layot">{isSuccess ? 'CLAIM BADGE' : 'QUIZ'}</p>
        {isSuccess ? (
          <SOLMints
            cmId_course="9yDon6UgfBA4Xip46v2UjRDvXM5zp3pxGfLx4x9wA1KD"
            image_name={images.Solana}
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

export default Quiz;
