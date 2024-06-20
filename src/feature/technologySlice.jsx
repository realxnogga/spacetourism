


import { createSlice } from "@reduxjs/toolkit";

export const TechnologySlice = createSlice({
    name: 'TechnologySliceName',
    initialState: {
       whatTechnologyIsClicked: 'launchvehicle',
    },
    reducers: {
        whatTechnologyIsClickedState: (state, action) => {
            state.whatTechnologyIsClicked = action.payload;
        },
    },
})

export const whatTechnologyIsClickedTemp = state => state.TechnologySliceName.whatTechnologyIsClicked;
export const { whatTechnologyIsClickedState } = TechnologySlice.actions;
export const TechnologySliceReducer = TechnologySlice.reducer;