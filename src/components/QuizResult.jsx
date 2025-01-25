import React from "react";

function QuizResult(props) {
  return (
    <div>
      <h1>Quiz Summary</h1>
      <p className="result">You got {props.correct} out of 10!</p>
      <p className="incorrect">Incorrect answer : {10 - props.correct}</p>
    </div>
  );
}

export default QuizResult;
