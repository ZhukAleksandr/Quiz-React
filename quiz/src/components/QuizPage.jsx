import { useState } from "react";
import Modal from "./Modal";

function QuizPage () {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="quiz-box">
                <h1>Quiz page</h1>
                <h2>Question</h2>
                <div className="timer">
                    00:00
                </div>
                <ul>
                    <li>First q</li>
                    <li>Second q</li>
                    <li>Third</li>
                    <li>Fourth q</li>
                </ul>
                <button onClick={() => setIsOpen(true)}>End quiz</button>

            </div>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
        </>

    )
}

export default QuizPage;