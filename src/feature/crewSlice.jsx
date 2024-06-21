


import { createSlice } from "@reduxjs/toolkit";

export const CrewSlice = createSlice({
    name: 'CrewSliceName',
    initialState: {
       whatCrewIsClicked: 'douglashurley',
    },
    reducers: {
        whatCrewIsClickedState: (state, action) => {
            state.whatCrewIsClicked = action.payload;
        },
    },
})

export const whatCrewIsClickedTemp = state => state.CrewSliceName.whatCrewIsClicked;
export const { whatCrewIsClickedState } = CrewSlice.actions;
export const CrewSliceReducer = CrewSlice.reducer;