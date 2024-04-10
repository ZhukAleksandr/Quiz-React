import "./App.css";
import MainPage from "./components/MainPage";
import { Routes, Route } from "react-router-dom";
import ResultPage from "./components/ResultPage";

function App() {
  return (
    <div className="App">      
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/results" element={<ResultPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
