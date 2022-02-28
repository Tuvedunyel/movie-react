import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [];

export const listeSlice = createSlice({
    name: "Liste",
    initialState: { value: initialStateValue },
    reducers: {
        maListe: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { maListe } = listeSlice.actions;

export default listeSlice.reducer;