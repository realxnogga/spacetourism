




import { createSlice } from "@reduxjs/toolkit";

export const NavbarSlice = createSlice({
    name: 'NavbarSliceName',
    initialState: {
        whatIsClickedInNavbar: 'home',
        isSidebarOpen: false,
    },
    reducers: {
        isSidebarOpenState: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        whatIsClickedInNavbarState: (state, action) => {
            state.whatIsClickedInNavbar = action.payload;
        },
    },
})

export const { whatIsClickedInNavbarState, isSidebarOpenState } = NavbarSlice.actions;
export const isSidebarOpenTemp = state => state.NavbarSliceName.isSidebarOpen;
export const whatIsClickedInNavbarTemp = state => state.NavbarSliceName.whatIsClickedInNavbar;
export const NavbarSliceReducer = NavbarSlice.reducer;