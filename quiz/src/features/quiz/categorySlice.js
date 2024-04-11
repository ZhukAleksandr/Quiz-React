import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategory = createAsyncThunk(
  "quiz/fetchingCategory",
  async () => {
    const res = await fetch("https://opentdb.com/api_category.php");
    const data = await res.json();    
    return data;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: [],
  reducers: {
    setCategory: (_, action) => {
      return action.payload.category;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.fulfilled, (state, action) => {     
      state.entities.push(action.payload)
      return action.payload.trivia_categories;
    });
  },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
export const selectCategory = (state) => state.category;
