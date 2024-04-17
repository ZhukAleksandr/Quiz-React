import { useSelector } from "react-redux";


function Question() {

    const questions = useSelector((state) => state.settings.questions);
    const index = useSelector((state) => state.settings.questionIndex);

    const {question} = questions[index]; 
    
    return (
        <>
            {questions &&
            <div className="question" value={question} key={index}>
            {question}
            </div>
            }            
        </>
    )
}

export default Question;