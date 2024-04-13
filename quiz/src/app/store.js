import { configureStore } from '@reduxjs/toolkit'
import settingsSlice from '../features/quiz/settingsSlice'

export const store = configureStore({
  reducer: {
    settings: settingsSlice
  },
})

