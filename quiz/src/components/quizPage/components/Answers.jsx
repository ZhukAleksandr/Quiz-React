import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  setQuestionIndex,
  setInitialIndex,
  setScore,
} from "../../../features/quiz/settingsSlice";

function Answers() {

  const questions = useSelector((state) => state.settings.questions);
  const index = useSelector((state) => state.settings.questionIndex); 

  const { incorrect_answers, correct_answer } = questions[index];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let answers = [...incorrect_answers];

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  answers.splice(getRandomInt(incorrect_answers.length), 0, correct_answer);

  // useEffect(() => {
  //     if (!questions) {
  //     return;
  //     }
  //     let answers = [...incorrect_answers, correct_answer]
  //     answers.splice(getRandomInt(incorrect_answers.length), 0, correct_answer)
  //     setOptions(answers)
  // }, [questions])

    const handleChoise = (e) => {
    dispatch(setQuestionIndex());
      console.log(e.target.textContent);
    if(e.target.textContent === correct_answer){
      dispatch(setScore());
    }

    if (index >= questions.length - 1) {
      dispatch(setInitialIndex());
      navigate("/statistics");
    }
  };

  return (
    <div className="answers">
      <>
        {questions &&
          answers.map((a, i) => (
            <div className="answer" value={a} key={i} onClick={handleChoise}>
              {a}
            </div>
          ))}
      </>
    </div>
  );
}

export default Answers;
