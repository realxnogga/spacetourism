

import { createSlice } from "@reduxjs/toolkit";

export const PlanetSlice = createSlice({
    name: 'PlanetSliceName',
    initialState: {
       whatPlanetIsClicked: 'moon',
    },
    reducers: {
        whatPlanetIsClickedState: (state, action) => {
            state.whatPlanetIsClicked = action.payload;
        },
    },
})

export const whatPlanetIsClickedTemp = state => state.PlanetSliceName.whatPlanetIsClicked;
export const { whatPlanetIsClickedState } = PlanetSlice.actions;
export const PlanetSliceReducer = PlanetSlice.reducer;