import { configureStore } from '@reduxjs/toolkit'
import categorySlice from '../features/quiz/categorySlice'

export const store = configureStore({
  reducer: {
    categorySlice
  },
})

console.log(store.reducer);