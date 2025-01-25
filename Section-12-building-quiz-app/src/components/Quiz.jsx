import { useState } from "react";

import QuestionTimer from "./QuestionTimer.jsx";
import QUESTIONS from "../questions.js";
import quizCompletedImg from "../assets/quiz-complete.png";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsCompleted = userAnswers.length === QUESTIONS.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer]
    });
  }

  if (quizIsCompleted) {
    return (
      <div id="summary">
        <img src={quizCompletedImg} alt="quiz completed" />
        <h2>Quiz completed!</h2>
      </div>
    )
  }

  const shuffuldAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffuldAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer 
          timeout={10000} 
          onTimeout={() => handleSelectAnswer(null)} 
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <div id="answers">
          {shuffuldAnswers.map((answer, index) => (
            <li key={index} className="answer"> 
              <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
            </li>
          ))}
        </div>
      </div>
      
    </div>
  )
}