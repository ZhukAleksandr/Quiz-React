import "./App.css";
import MainPage from "./components/MainPage";
import { Routes, Route } from "react-router-dom";
import ResultPage from "./components/ResultPage";
import StatisticsPage from "./components/StatisticsPage";
import QuizPage from "./components/quizPage/QuizPage";

function App() {
  return (
    <div className="App">      
      <Routes>        
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/quiz" element={<QuizPage />}></Route>
        <Route path="/statistics" element={<StatisticsPage />}></Route>
        <Route path="/results" element={<ResultPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
