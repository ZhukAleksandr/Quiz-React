import { useState } from "react";
import Modal from "../Modal";
import Question from "./components/Question";
import Answers from "./components/Answers";
import Score from "./components/Score";


function QuizPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="quiz-box">
        <h1>Quiz page</h1>
        <div className="timer">00:00</div>

        <Question />
        <Answers />
        <Score />

        <button onClick={() => setIsOpen(true)}>End quiz</button>

      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </>
  );
}

export default QuizPage;
