import { useNavigate } from "react-router-dom";

function ResultPage () {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Results</h2>
            <h3>Thank you for completing this quiz. Here are your results</h3>
            <h3>You answered 5 out of 10 questions correctly</h3>
            <h3>Quiz configuration</h3>
                <p>type True/False </p>
                <p>category Geogrphy</p>
                <p>time  2m</p>
                <p>difficulty  Hard</p>
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