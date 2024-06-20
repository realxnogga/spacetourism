


import { useEffect, useState } from "react";
import { whatIsClickedInNavbarState, whatIsClickedInNavbarTemp } from "../feature/navbarSlice"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Sidebar } from "./sidebar";
import { isSidebarOpenState } from "../feature/navbarSlice";
import { isSidebarOpenTemp } from "../feature/navbarSlice";

export const MobileNavbar = () => {

    const dispatch = useDispatch();
    const isSidebarOpen = useSelector(isSidebarOpenTemp);
    const whatIsClickedInNavbar = useSelector(whatIsClickedInNavbarTemp);

    return (
        <header className="absolute z-20 top-0 h-[5rem] w-screen flex items-center justify-between px-5">
            <NavLink to={'/'} >
                <img src="../assets/shared/logo.svg" alt="" onClick={() => { dispatch(whatIsClickedInNavbarState('home')) }} />
            </NavLink>

            {isSidebarOpen ?
                (
                    <img src="../assets/shared/icon-hamburger.svg" alt=""
                        onClick={() => { dispatch(isSidebarOpenState()) }} className="z-10" />
                )
                :
                (
                    <img src="../assets/shared/icon-close.svg" alt=""
                        onClick={() => { dispatch(isSidebarOpenState()) }} className="z-10" />
                )

            }

            <Sidebar />
        </header>
    )
}