import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setQuestionCategory,
  setQuestionDifficulty,
  setQuestionType,
  setNumberOfQuestions,
  setTimeChoise,
} from "../features/quiz/settingsSlice";

function MainPage() {
  const navigate = useNavigate();

  const category = useSelector((state) => state.settings.category);
  const difficulty = useSelector((state) => state.settings.difficulty);
  const type = useSelector((state) => state.settings.type);
  const number = useSelector((state) => state.settings.number);
  const time = useSelector((state) => state.settings.time);

  const dispatch = useDispatch();

  console.log(time);

  const [options, setOptions] = useState(null);

  useEffect(() => {
    const apiUrl = `https://opentdb.com/api_category.php`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        setOptions(response.trivia_categories);
      });
  }, [setOptions]);

  const handleCategoryChange = (event) => {
    dispatch(setQuestionCategory(event.target.value));
  };

  const handleDifficultyChange = (event) => {
    dispatch(setQuestionDifficulty(event.target.value));
  };
  const handleTypeChange = (event) => {
    dispatch(setQuestionType(event.target.value));
  };
  const handleAmountChange = (event) => {
    dispatch(setNumberOfQuestions(event.target.value));
  };

  const handleTimeChange = (event) => {
    dispatch(setTimeChoise(event.target.value));
  };


  return (
    <div className="quiz-box">
      <h1>Quiz main page</h1>

      <div className="quiz-settings">
        <h2>Select category:</h2>
        <select value={category} onChange={handleCategoryChange}>
          <option>{category}</option>
          {options &&
            options.map((option) => (
              <option value={option.id} key={option.id}>
                {option.name}
              </option>
            ))}
        </select>

        <h2>Select difficulty:</h2>
        <select value={difficulty} onChange={handleDifficultyChange}>
          <option value="" key="difficulty-0">
            Any Difficulty
          </option>
          <option value="easy" key="difficulty-1">
            Easy
          </option>
          <option value="medium" key="difficulty-2">
            Medium
          </option>
          <option value="hard" key="difficulty-3">
            Hard
          </option>
        </select>

        <h2>Select type:</h2>
        <select value={type} onChange={handleTypeChange}>
          <option value="" key="type-0">
            Any type
          </option>
          <option value="multiple" key="type-1">
            Multiple Choice
          </option>
          <option value="boolean" key="type-2">
            True/False
          </option>
        </select>

        <h2>Amount of questions:</h2>
        <p>Выбранное значение: {number}</p>
        <input
          type="range"
          min={5}
          max={15}
          value={number}
          onChange={handleAmountChange}
        />

        <h2>Select time:</h2>
        <select value={time} onChange={handleTimeChange}>
          <option value="1">1m</option>
          <option value="2">2m</option>
          <option value="5">5m</option>
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
