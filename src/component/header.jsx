
import { whatIsClickedInNavbarState, whatIsClickedInNavbarTemp } from "../feature/navbarSlice"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const Header = () => {

    const dispatch = useDispatch();

    const whatIsClickedInNavbar = useSelector(whatIsClickedInNavbarTemp);

    return (
        <header className="absolute top-10 h-[6em] w-screen flex items-center justify-between pl-12">
            <img src="../assets/shared/logo.svg" alt="" />

            <hr className="h-[1px] w-[30rem] border-none bg-gray-400" />

            <nav className="bg-white bg-opacity-5 backdrop-blur-lg h-full w-[52rem] flex items-center justify-center">
                <ul className="h-full flex items-center gap-x-14 text-gray-400">
                    <NavLink to={'/'} className={'h-full'}>
                        <li
                            onClick={() => { dispatch(whatIsClickedInNavbarState('home')) }}
                            className={`${whatIsClickedInNavbar === 'home' ? 'text-white border-b-[.2rem]' : ''} h-full flex items-center hover:text-white hover:border-b-[.2rem] cursor-pointer`}>
                            <strong className="mr-2">00</strong>HOME
                        </li>
                    </NavLink>

                    <NavLink to={'/destination'} className={'h-full'}>
                        <li
                            onClick={() => { dispatch(whatIsClickedInNavbarState('destination')) }}
                            className={`${whatIsClickedInNavbar === 'destination' ? 'text-white border-b-[.2rem]' : ''} h-full flex items-center hover:text-white hover:border-b-[.2rem] cursor-pointer`}>
                            <strong className="mr-2">01</strong>DESTINATION
                        </li>
                    </NavLink>

                    <NavLink to={'/crew'} className={'h-full'}>
                        <li
                            onClick={() => { dispatch(whatIsClickedInNavbarState('crew')) }}
                            className={`${whatIsClickedInNavbar === 'crew' ? 'text-white border-b-[.2rem]' : ''} h-full flex items-center hover:text-white hover:border-b-[.2rem] cursor-pointer`}>
                            <strong className="mr-2">02</strong>CREW
                        </li>
                    </NavLink>

                    <NavLink to={'/technology'} className={'h-full'}>
                        <li
                            onClick={() => { dispatch(whatIsClickedInNavbarState('technology')) }}
                            className={`${whatIsClickedInNavbar === 'technology' ? 'text-white border-b-[.2rem]' : ''} h-full flex items-center hover:text-white hover:border-b-[.2rem] cursor-pointer`}>
                            <strong className="mr-2">03</strong>TECHNOLOGY
                        </li>
                    </NavLink>
                </ul>
            </nav>

        </header>
    )
}