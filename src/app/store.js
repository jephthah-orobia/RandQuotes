import { configureStore } from '@reduxjs/toolkit';
import quotesReducer from '../features/quotes/quotesSlice';
//import bgReducer from '../features/bg/bgSlice';




export const store = configureStore({
  reducer: {
    quotes: quotesReducer
    //background: bgReducer
  },
});
