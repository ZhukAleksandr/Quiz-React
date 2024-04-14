import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {setQuestions } from "../features/quiz/settingsSlice";


function FetchButton() {

    const category = useSelector((state) => state.settings.category);
    const difficulty = useSelector((state) => state.settings.difficulty);
    const type = useSelector((state) => state.settings.type);
    const number = useSelector((state) => state.settings.number);
    // const time = useSelector((state) => state.settings.time);

    const dispatch = useDispatch();
    
    const navigate = useNavigate();



    const handleQuery = async () => {
		// we always need to specify the number of questions that we
		// want to be returned
    let apiUrl = `https://opentdb.com/api.php?amount=${number}`;
		// only add the rest of the parameters if they aren't 'all'
    if (category.length) {
      apiUrl = apiUrl.concat(`&category=${category}`)
    }
    if (difficulty.length) {
      apiUrl = apiUrl.concat(`&difficulty=${difficulty}`)
    }
    if (type.length) {
      apiUrl = apiUrl.concat(`&type=${type}`)
    }

    await fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        dispatch(setQuestions(data.results)) 
      });
    navigate("/quiz")
     
  }


    return <button onClick={handleQuery}>Start quiz</button>;
}

export default FetchButton;