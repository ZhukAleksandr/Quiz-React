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

    let type = {...questions}
        console.log(type.type);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const showCurrentQuestion = () => {
        
        return questions[0][index].question
    }

    const handleChoise = () => {
        dispatch(setQuestionIndex());
        console.log(questions[0].length);
        if(index >= questions[0].length - 1){

            dispatch(setInitialIndex())
            navigate("/statistics")
        }
      };
    
// console.log(handleNextQuestion());

    return (
        <>
            <div className="quiz-box">
                <h1>Quiz page</h1>
                <div className="timer">
                    00:00
                </div>
                <h2>{showCurrentQuestion()}</h2>
                <ul>
                    <li onClick={handleChoise}>{questions[0][2].correct_answer}</li>
                    <li>{questions[0][2].incorrect_answers[0]
}</li>
                    <li>{questions[0][2].incorrect_answers[1]}</li>
                    <li>{questions[0][2].incorrect_answers[2]}</li>
                </ul>

                {/* <ul>
                    {questions.map((question, i) => (
                    <li key={i} >
                        {option}
                    </li>
                    ))}
                </ul> */}


                <button onClick={() => setIsOpen(true)}>End quiz</button>

            </div>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
        </>

    )
}

export default QuizPage;