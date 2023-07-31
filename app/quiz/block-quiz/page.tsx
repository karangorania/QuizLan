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

const blockchainQuiz: Quiz = {
  id: 3,
  name: 'What is Blockchain Technology?',
  questions: [
    {
      id: 1,
      text: 'What does Blockchain technology provide?',
      answers: [
        { id: 1, text: 'Centralized database system', isCorrect: false },
        {
          id: 2,
          text: 'Decentralized and distributed digital ledger',
          isCorrect: true,
        },
        { id: 3, text: 'Physical storage system', isCorrect: false },
        { id: 4, text: 'A new form of currency', isCorrect: false },
      ],
    },
    {
      id: 2,
      text: 'Can data, once recorded in a blockchain, be easily altered?',
      answers: [
        { id: 1, text: 'Yes, very easily', isCorrect: false },
        { id: 2, text: 'No, it is very difficult', isCorrect: true },
        { id: 3, text: 'Only in private blockchains', isCorrect: false },
        { id: 4, text: 'Only on Sundays', isCorrect: false },
      ],
    },
    {
      id: 3,
      text: 'Is blockchain technology only used for cryptocurrencies?',
      answers: [
        {
          id: 1,
          text: "Yes, it's only used for cryptocurrencies",
          isCorrect: false,
        },
        {
          id: 2,
          text: 'No, it has countless other applications',
          isCorrect: true,
        },
        {
          id: 3,
          text: 'Only Bitcoin uses blockchain technology',
          isCorrect: false,
        },
        { id: 4, text: 'Blockchain technology is a myth', isCorrect: false },
      ],
    },
    {
      id: 4,
      text: 'Is blockchain technology secure?',
      answers: [
        {
          id: 1,
          text: 'Yes, due to cryptographic and algorithmic methods',
          isCorrect: true,
        },
        { id: 2, text: "No, it's very easy to hack", isCorrect: false },
        {
          id: 3,
          text: 'Only private blockchains are secure',
          isCorrect: false,
        },
        {
          id: 4,
          text: 'Security depends on the mood of the blockchain',
          isCorrect: false,
        },
      ],
    },
  ],
};

// const Quiz = () => {
const Block = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);

  const questions = blockchainQuiz.questions;

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
        <Link href="/course/blockchain">
          <p>&#x2190; Blockchain</p>
        </Link>
      </div>
      <div className="quiz-content-wrapper">
        <p className="title-layot">{isSuccess ? 'CLAIM BADGE' : 'QUIZ'}</p>
        {isSuccess ? (
          <SOLMints
            cmId_course="G4xLHBiG6Jq6gVhwwq2XRpKjhNkUBeNMS3AKNLWTdcKc"
            image_name={images.BlockChain}
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

export default Block;
