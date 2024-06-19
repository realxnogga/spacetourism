




import { createSlice } from "@reduxjs/toolkit";

export const NavbarSlice = createSlice({
    name: 'NavbarSliceName',
    initialState: {
        whatIsClickedInNavbar: 'home',

    },
    reducers: {
        whatIsClickedInNavbarState: (state, action) => {
            state.whatIsClickedInNavbar = action.payload;
        },
    },
})

export const { whatIsClickedInNavbarState } = NavbarSlice.actions;
export const whatIsClickedInNavbarTemp = state => state.NavbarSliceName.whatIsClickedInNavbar;
export const NavbarSliceReducer = NavbarSlice.reducer;