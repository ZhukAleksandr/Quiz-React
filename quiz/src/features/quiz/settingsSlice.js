import { createSlice } from "@reduxjs/toolkit";

// export const fetchCategory = createAsyncThunk(
//   "quiz/fetchingCategory",
//   async () => {
//     const res = await fetch("https://opentdb.com/api_category.php");
//     const data = await res.json();    
//     return data;
//   }
// );

const initialState = {  
  category: [],
  difficulty: '',
  type: '',
  number: '5',
  time: '1'
}

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setQuestionCategory (state, action) {
      state.category = action.payload
    },
    setQuestionDifficulty (state, action) {
      state.difficulty = action.payload
      // switch(action.payload){
      //   case "easy":
      //     state.difficulty = ['easy'];
      //     break;
      //   case "medium":
      //     state.difficulty = ['medium'];
      //     break;
      //   case "hard":
      //     state.difficulty = ['hard'];
      //     break;
      //   case "":
      //     state.difficulty = [];
      //     break;
      //   default:
      //     state.difficulty = []
      // }
    },
    setQuestionType (state, action) {
      state.type = action.payload
    },
    setNumberOfQuestions (state, action) {
      state.number = action.payload
    },
    setTimeChoise (state, action) {
      state.time = action.payload
    },
  },
});

console.log(settingsSlice);
// console.log(settingsSlice.actions.setQuestionCategory());

export const { setQuestionCategory, setQuestionDifficulty, setQuestionType, setNumberOfQuestions, setTimeChoise } = settingsSlice.actions;
export default settingsSlice.reducer;

