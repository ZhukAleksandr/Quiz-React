import { useState } from "react";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import {
    setQuestionIndex,
    setInitialIndex,
  } from "../features/quiz/settingsSlice";

  import { useNavigate } from "react-router";


function QuizPage () {
    const [isOpen, setIsOpen] = useState(false);

    const questions = useSelector((state) => state.settings.questions);
    const index = useSelector((state) => state.settings.questionIndex);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChoice = () => {
        dispatch(setQuestionIndex());
        console.log(questions[0].length);
        if(index >= questions[0].length - 1){

            dispatch(setInitialIndex())
            navigate("/statistics")
        }
      };


    return (
        <>
            <div className="quiz-box">
                <h1>Quiz page</h1>
                <div className="timer">
                    00:00
                </div>
                <h2>123</h2>

                <button onClick={() => setIsOpen(true)}>End quiz</button>

            </div>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
        </>

    )
}

export default QuizPage;