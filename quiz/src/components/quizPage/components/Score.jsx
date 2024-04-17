import { useSelector, } from "react-redux";


function Score() {

    const questions = useSelector((state) => state.settings.questions);
    const score = useSelector((state) => state.settings.score);
    
    return (
        <div>
            {`${score} / ${questions.length}`}    
        </div>
    )
}

export default Score;