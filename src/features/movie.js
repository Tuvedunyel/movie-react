import { createSlice } from "@reduxjs/toolkit";

const initialStateValue= [];

export const movieSlice = createSlice ({
    name: 'movie',
    initialState: { value: initialStateValue },
    reducers: {
        popularMovie: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { popularMovie } = movieSlice.actions;
export default movieSlice.reducer;