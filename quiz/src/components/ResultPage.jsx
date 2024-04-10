import { useNavigate } from "react-router-dom";

function ResultPage () {
    const navigate = useNavigate();

    return (
        <div className="quiz-box">
            <h1>Results</h1>
            <h2>Thank you for completing this quiz. <br/> Here are your results</h2>
            <h2>You answered 5 out of 10 questions correctly</h2>
            <h3>Quiz configuration</h3>
            <div className="quiz-config"> 
                <div>type True/False </div>
                <div>category Geogrphy</div>
                <div>time  2m</div>
                <div>difficulty  Hard</div>
            </div>
            <div>
            <div className="button-box">
                    <button>
                        Restart
                    </button>
                    <button onClick={() => navigate("/")}>
                        Choose another quiz
                    </button>
            </div>
            </div>

        </div>
    )
}

export default ResultPage;