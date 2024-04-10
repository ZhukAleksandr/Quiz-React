import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function MainPage() {
  const navigate = useNavigate();

  const createNumberOptions = () => {
    const options = [];
    for (let i = 5; i <= 15; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  const [options, setOptions] = useState(null);
  const [questionCategory, setQuestionCategory] = useState("");
  const [questionDifficulty, setQuestionDifficulty] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);

  const handleCategoryChange = (event) => {
    setQuestionCategory(event.target.value);
  };

  const handleDifficultyChange = event => {
    setQuestionDifficulty(event.target.value)
  }
  const handleTypeChange = event => {
    setQuestionType(event.target.value)
  }
	const handleAmountChange = event => {
    setNumberOfQuestions(event.target.value)
  }

  useEffect(() => {
    const apiUrl = `https://opentdb.com/api_category.php`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        setOptions(response.trivia_categories);
      });
  }, [setOptions]);

  return (
    <div className="quiz-box">
      <h1>Quiz main page</h1>

      <div className="quiz-settings">
        <h2>Select category:</h2>
        <select value={questionCategory} onChange={handleCategoryChange}>
          <option>All</option>
          {options &&
            options.map((option) => (
              <option value={option.id} key={option.id}>
                {option.name}
              </option>
            ))}
        </select>

        <h2>Select difficulty:</h2>
        <select value={questionDifficulty} onChange={handleDifficultyChange}>
            <option value="" key="difficulty-0">All</option>
            <option value="easy" key="difficulty-1">Easy</option>
            <option value="medium" key="difficulty-2">Medium</option>
            <option value="hard" key="difficulty-3">Hard</option>
        </select>

        <h2>Select type:</h2>
        <select value={questionType} onChange={handleTypeChange}>
            <option value="" key="type-0">All</option>
            <option value="multiple" key="type-1">Multiple Choice</option>
            <option value="boolean" key="type-2">True/False</option>
          </select>

        <h2>Amount of questions:</h2>
        <p>Выбранное значение: {numberOfQuestions}</p>       
        <input type="range" min={5} max={15} value={numberOfQuestions} onChange={handleAmountChange}/>
        

        <h2>Select time:</h2>
        <select>
          <option value="4">1m</option>
          <option value="5">2m</option>
          <option value="6">5m</option>
        </select>
      </div>
      <div className="button-box">
        <button onClick={() => navigate("/quiz")}>Start quiz</button>
        <button onClick={() => navigate("/statistics")}>See my stats</button>
      </div>
    </div>
  );
}

export default MainPage;
