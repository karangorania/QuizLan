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

const phantomQuiz: Quiz = {
  id: 2,
  name: 'What is Phantom Wallet?',
  questions: [
    {
      id: 1,
      text: 'Which blockchains does Phantom Wallet support?',
      answers: [
        { id: 1, text: 'Only Solana', isCorrect: false },
        { id: 2, text: 'Solana, Ethereum and Polygon', isCorrect: true },
        { id: 3, text: 'Only Ethereum', isCorrect: false },
        { id: 4, text: 'Only Binance Smart Chain', isCorrect: false },
      ],
    },
    {
      id: 2,
      text: 'What functionality does Phantom Wallet offer?',
      answers: [
        {
          id: 1,
          text: 'Asset management, dApp interaction, and token swapping',
          isCorrect: true,
        },
        { id: 2, text: 'Mining cryptocurrency', isCorrect: false },
        { id: 3, text: 'Launching your own token', isCorrect: false },
        { id: 4, text: 'None of the above', isCorrect: false },
      ],
    },
    {
      id: 3,
      text: 'What tokens does Phantom Wallet support?',
      answers: [
        { id: 1, text: 'Only SOL token', isCorrect: false },
        {
          id: 2,
          text: 'All Ethereum, Polygon and Solana SPL tokens',
          isCorrect: true,
        },
        { id: 3, text: 'Only BTC and ETH', isCorrect: false },
        { id: 4, text: 'Only Binance BEP-20 tokens', isCorrect: false },
      ],
    },
    {
      id: 4,
      text: 'Can you swap tokens directly within the Phantom Wallet?',
      answers: [
        { id: 1, text: 'Yes', isCorrect: true },
        { id: 2, text: 'No', isCorrect: false },
        { id: 3, text: 'Only specific tokens', isCorrect: false },
        { id: 4, text: 'Only on Tuesdays', isCorrect: false },
      ],
    },
  ],
};

// const Quiz = () => {
const Phan = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);

  const questions = phantomQuiz.questions;

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
        <Link href="/course/phantom">
          <p>&#x2190; Phantom</p>
        </Link>
      </div>
      <div className="quiz-content-wrapper">
        <p className="title-layot">{isSuccess ? 'CLAIM BADGE' : 'QUIZ'}</p>
        {isSuccess ? (
          <SOLMints
            cmId_course="2e9PF9mHXo63kYKHcyCp7ny7rxjhfFBP3j5V7oN8YjDQ"
            image_name={images.Phantom}
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

export default Phan;
