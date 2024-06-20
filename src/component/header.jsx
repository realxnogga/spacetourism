

import { whatIsClickedInNavbarState, whatIsClickedInNavbarTemp } from "../feature/navbarSlice"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { DesktopNavbar } from "./desktopnavbar";
import { MobileNavbar } from "./mobilenavbar";
import { ScreenWidth } from "./screenwidth";


export const Header = () => {

  const dispatch = useDispatch();

  const screenwidth = ScreenWidth();

  return (

    screenwidth <= 740 ?
      (
        <MobileNavbar />
      )
      :
      (
        <DesktopNavbar />
      )
  )
}