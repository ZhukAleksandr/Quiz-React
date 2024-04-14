import { useState } from "react";
import Modal from "./Modal";
import { useSelector } from "react-redux";


function QuizPage () {
    const [isOpen, setIsOpen] = useState(false);

    const questions = useSelector((state) => state.settings.questions);
console.log(questions.question);
    return (
        <>
            <div className="quiz-box">
                <h1>Quiz page</h1>
                <div className="timer">
                    00:00
                </div>
                <h2>{questions[0][2].question}</h2>
                <ul>
                    <li>{questions[0][2].correct_answer}</li>
                    <li>{questions[0][2].incorrect_answers[0]
}</li>
                    <li>{questions[0][2].incorrect_answers[1]}</li>
                    <li>{questions[0][2].incorrect_answers[2]}</li>
                </ul>


                <button onClick={() => setIsOpen(true)}>End quiz</button>

            </div>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
        </>

    )
}

export default QuizPage;