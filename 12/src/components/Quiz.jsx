import { useState, useCallback } from "react";
import QUESTIONS from "../questions";

import Question from "./Question";
import Summary from "./Summary";


export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length 

  const handleSelect = useCallback(
    function handleSelect(answer) {
      setUserAnswers((prev) => {
        return [...prev, answer];
      });
    },
    []
  );

  const quizIsComplete = QUESTIONS.length === activeQuestionIndex;
  const handleSkipAnswer = useCallback(
    () => handleSelect(null),
    [handleSelect]
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionIndex={activeQuestionIndex}
        onSelectAnswer={handleSelect}
        onSkip={handleSkipAnswer}
      />
    </div>
  );
}
