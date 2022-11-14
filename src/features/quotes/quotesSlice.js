import { createSlice } from '@reduxjs/toolkit';
import randomQuote from './randomQuotes';

const { text, author, index } = randomQuote();
const initialState = {
    text: text,
    author: author,
    index: index
};


export const quotesSlice = createSlice({
    name: 'quotes',
    initialState,
    reducers: {
        getNext: (state) => {
            console.log('currentIndex: ' + state.index);
            let rq = randomQuote(state.index);
            state.text = rq.text;
            state.author = rq.author;
            state.index = rq.index;
        }
    }
});

export const { getNext } = quotesSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectText = (state) => state.quotes.text;

export const selectAuthor = (state) => state.quotes.author;

export default quotesSlice.reducer;