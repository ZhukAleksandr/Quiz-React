import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOptions = createAsyncThunk(
  "settings/fetchOptions",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("https://opentdb.com/api_category.php");

      if (!res.ok) {
        throw new Error("ServerError!!!");
      }
      const data = await res.json();
      // console.log(data.trivia_categories);
      return data.trivia_categories;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  category: "",
  difficulty: "",
  type: "",
  number: "5",
  time: "1",
  // status: null,
  // error: null,
  options: [],
  questions: [],
  questionIndex: 0,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setQuestionCategory(state, action) {
      state.category = action.payload;
      if (state.category === "Any category") {
        state.category = "";
      }
    },
    setQuestionDifficulty(state, action) {
      state.difficulty = action.payload;
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
    setQuestionType(state, action) {
      const validTypes = ["multiple", "boolean", ""];
      state.type = validTypes.includes(action.payload) ? action.payload : "";
    },
    setNumberOfQuestions(state, action) {
      state.number = action.payload;
    },
    setTimeChoise(state, action) {
      state.time = action.payload;
    },
    setQuestions(state, action) {
      state.questions.push(action.payload);      
    },
    setQuestionIndex(state){
      state.questionIndex += 1;
    },
    setInitialIndex(state){
      state.questionIndex = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOptions.fulfilled, (state, action) => {
      state.options = action.payload;
    });
  },
});

export const {
  setQuestionCategory,
  setQuestionDifficulty,
  setQuestionType,
  setNumberOfQuestions,
  setTimeChoise,
  setQuestions,
  setQuestionIndex,
  setInitialIndex,
} = settingsSlice.actions;
export default settingsSlice.reducer;
