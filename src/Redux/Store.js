import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './Reducers/CombineReducer'

export const store = configureStore({
  reducer: rootReducer,
})