import React, { useState } from "react";
import reactQuestions from "../Store/Questions";
import "../style/quiz.css";
import QuizResult from "./QuizResult";

function Quiz() {
  const [set, reset] = useState(0);
  const [selected, notSelected] = useState("");
  const [correct, wrong] = useState(0);

  const Next = () => {
    reset((prev) => prev + 1);
    if (selected != "") {
      if (selected === reactQuestions[set]?.correctoption) {
        wrong((prev) => prev + 1);
      }
    }
  };
  return (
    <div className="quiz-container">
      <h1>React Quiz App</h1>
      <div className="question-container">
        {set != 10 ? (
          <>
            <p className="question">{reactQuestions[set]?.question}</p>
            <p className="question-number"> Question {set + 1} out of 10</p>
            <div className="options">
              {reactQuestions[set]?.options.map((option) => (
                <button
                  onClick={() => notSelected(option)}
                  className={selected === option && "active"}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="next-previous">
              <button
                onClick={() => set != 0 && reset((prev) => prev - 1)}
                id="prev"
              >
                Previous
              </button>
              <button onClick={Next} id="next">
                Next
              </button>
            </div>
          </>
        ) : (
          <QuizResult correct={correct} />
        )}
      </div>
    </div>
  );
}

export default Quiz;
