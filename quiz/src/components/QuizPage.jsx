import { useState } from "react";
import Modal from "./Modal";

function QuizPage () {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="quiz-box">
            <h1>Quiz page</h1>
            <h2>Question</h2>
            <ul>
                <li>First q</li>
                <li>Second q</li>
                <li>Third</li>
                <li>Fourth q</li>
            </ul>

            <div className="modal">

            </div>

            <button onClick={() => setIsOpen(true)}>End quiz</button>

            {isOpen && <Modal setIsOpen={setIsOpen} />}

        </div>
    )
}

export default QuizPage;