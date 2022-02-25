import { createSlice } from "@reduxjs/toolkit";

const initialStateValue= [];

export const movieSlice = createSlice({ 
    name: "movie",
    initialState: { value: initialStateValue },
    reducers: { 
        addMovie: ( state, action ) => {
            state.value = action.payload;
        }
     }
 });
 
 export const { addMovie } = movieSlice.actions;

 export default movieSlice.reducer;